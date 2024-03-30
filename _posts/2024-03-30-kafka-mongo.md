---
layout:       post
title:        "(작성중) kafka를 통한 데이터 마이그레이션 (mysql ➡️ mongoDB)"
author:       "xxng1"
header-style: text
catalog:      true
tags:
    - 작성중
---
aws ec2 사용

1. EC2 생성 및 SSH 접속
- AMI: Ubuntu 프리티어
- 인스턴스: t2.small ( t2.micro로 진행하면 kafka는 켜지지 않고 zookeeper만 켜진다!!!!!!!! ) 메모리 이슈
- 스토리지: 30GiB gp2
- 보안그룹 설정
- 주키퍼 2181
- 카프카 9092
- mysql 3306
- mongodb 27018
![](https://velog.velcdn.com/images/woongaa1/post/9eb8eb5a-35a4-49a6-9bf2-435c035468c7/image.png)

sudo passwd
apt-get update
apt-get install docker.io
apt-get install docker-compose
midir kafka
cd kafka
vi docker-compose.yml
```
version: '2'

services:
  zookeeper:
    image: wurstmeister/zookeeper:3.4.6
    ports:
     - "2181:2181"

  kafka:
    image: wurstmeister/kafka:2.11-2.0.1
    ports:
     - "9092:9092"
    expose:
     - "9093"
    environment:
      KAFKA_ADVERTISED_LISTENERS: INSIDE://kafka:9093,OUTSIDE://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: INSIDE:PLAINTEXT,OUTSIDE:PLAINTEXT
      KAFKA_LISTENERS: INSIDE://0.0.0.0:9093,OUTSIDE://0.0.0.0:9092
      KAFKA_INTER_BROKER_LISTENER_NAME: INSIDE
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: "false"
      KAFKA_DELETE_TOPIC_ENABLE: "true"

```
docker-compose up -d
```
root@ip-:~/kafka# docker ps
CONTAINER ID   IMAGE                           COMMAND                  CREATED         STATUS         PORTS                                                                   NAMES
56d7845814ec   wurstmeister/kafka:2.11-2.0.1   "start-kafka.sh"         2 minutes ago   Up 2 minutes   0.0.0.0:9092->9092/tcp, :::9092->9092/tcp, 9093/tcp                     kafka_kafka_1
5f2c42034da4   wurstmeister/zookeeper:3.4.6    "/bin/sh -c '/usr/sb…"   2 minutes ago   Up 2 minutes   22/tcp, 2888/tcp, 3888/tcp, 0.0.0.0:2181->2181/tcp, :::2181->2181/tcp   kafka_zookeeper_1
```

docker pull mysql
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=123qwe -d -p 3306:3306 mysql:latest
docker exec
mysql -u root -p
create database kafka;
use kafka;
```
CREATE TABLE post_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    count INT,
    info VARCHAR(255),
    item_name VARCHAR(255),
    price FLOAT,
    todaycount INT
);

CREATE TABLE post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    count INT,
    info VARCHAR(255),
    item_name VARCHAR(255),
    price FLOAT,
    todaycount INT
);

```
```
INSERT INTO post_tags (count, info, item_name, price, todaycount) VALUES
(10, 'Sample post tags info 1', 'Sample item 1', 100.0, 5),
(20, 'Sample post tags info 2', 'Sample item 2', 200.0, 8),
(30, 'Sample post tags info 3', 'Sample item 3', 300.0, 12);

INSERT INTO post (count, info, item_name, price, todaycount) VALUES
(15, 'Sample post info 1', 'Sample item 4', 150.0, 3),
(25, 'Sample post info 2', 'Sample item 5', 250.0, 6),
(35, 'Sample post info 3', 'Sample item 6', 350.0, 9);

```
docker pull mongo
docker run -d -p 27017:27017 --name mongodb mongo

root@ip-:~/kafka# docker ps
CONTAINER ID   IMAGE                           COMMAND                  CREATED          STATUS          PORTS                                                                   NAMES
9da0ab3adf04   mongo                           "docker-entrypoint.s…"   8 seconds ago    Up 7 seconds    0.0.0.0:27017->27017/tcp, :::27017->27017/tcp                           mongodb
f8991faed26d   mysql:latest                    "docker-entrypoint.s…"   7 minutes ago    Up 7 minutes    0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp                    mysql-container
56d7845814ec   wurstmeister/kafka:2.11-2.0.1   "start-kafka.sh"         17 minutes ago   Up 17 minutes   0.0.0.0:9092->9092/tcp, :::9092->9092/tcp, 9093/tcp                     kafka_kafka_1
5f2c42034da4   wurstmeister/zookeeper:3.4.6    "/bin/sh -c '/usr/sb…"   17 minutes ago   Up 17 minutes   22/tcp, 2888/tcp, 3888/tcp, 0.0.0.0:2181->2181/tcp, :::2181->2181/tcp   kafka_zookeeper_1

apt-get install python3
apt-get install python3-pip

pip3 install kafka-python pymongo

```
from kafka import KafkaConsumer
from json import loads
import datetime
import pymongo

class Mongodb():
    def __init__(self):
        self.client = pymongo.MongoClient("mongodb://localhost:27017")
        # self.client = pymongo.MongoClient("mongodb+srv://atlas_user:atlas123@mycluster.p0ytpkn.mongodb.net/?retryWrites=true&w=majority")
        self.db = self.client['testd']
        self.collection = self.db['testc']

    def insert(self, message):
        self.collection.insert_one(message)

class Consumer():
    def __init__(self):
        self.consumer = KafkaConsumer('test',
                                 bootstrap_servers=['localhost:9092'],
                                 auto_offset_reset="earliest",
                                 enable_auto_commit=False,
                                 group_id='my-group', # 컨슈머 그룹핑(Fail Over, Offset 관리)
                                 value_deserializer=lambda x: loads(x.decode('utf-8')),
                                 consumer_timeout_ms=1000)

    def print_message(self, message):
        topic = message.topic
        partition = message.partition
        offset = message.offset
        timestamp = message.timestamp
        datetimeobj = datetime.datetime.fromtimestamp(timestamp / 1000)
        print("Topic:{}, partition:{}, offset:{}, datetimeobj:{}"
              .format(topic, partition, offset, datetimeobj))

    def run(self, mongodb_obj):
        while True:
            for message in self.consumer:
                self.print_message(message)
                mongodb_obj.insert(message.value)
                self.consumer.commit()

def main():
    Consumer().run(Mongodb())

if __name__ == "__main__":
    main()
```
producer.py
```
from kafka import KafkaProducer
from json import dumps
import mysql.connector
from datetime import datetime

class MySQLData:
    def __init__(self, host, user, password, database):
        self.connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.connection.cursor()

    def fetch_data(self, table_name):
        query = f"SELECT * FROM {table_name}"
        self.cursor.execute(query)
        columns = [column[0] for column in self.cursor.description]
        result = [dict(zip(columns, self._convert_to_serializable(row))) for row in self.cursor.fetchall()]
        return result

    def _convert_to_serializable(self, row):
        serializable_row = []
        for item in row:
            if isinstance(item, datetime):
                serializable_row.append(item.strftime('%Y-%m-%d %H:%M:%S'))
            else:
                serializable_row.append(item)
        return serializable_row

class KafkaProducerWrapper:
    def __init__(self, topic):
        self.producer = KafkaProducer(
            acks=1,
            compression_type='gzip',
            bootstrap_servers=['localhost:9092'],
            value_serializer=lambda x: dumps(x).encode('utf-8')
        )
        self.topic = topic

    def send_data(self, data):
        self.producer.send(self.topic, value=data)
        self.producer.flush()

def main():
    mysql_data_post_tags = MySQLData(host='localhost',
                                     user='root',
                                     password='123qwe',
                                     database='kafka')

    kafka_producer_post_tags = KafkaProducerWrapper(topic='test')

    data_to_send_post_tags = mysql_data_post_tags.fetch_data(table_name='post_tags')

    for data in data_to_send_post_tags:
        kafka_producer_post_tags.send_data(data)
        print(f"Data sent to Kafka (post_tags): {data}")

    mysql_data_post = MySQLData(host='localhost',
                                user='root',
                                password='123qwe',
                                database='kafka')

    kafka_producer_post = KafkaProducerWrapper(topic='test')

    data_to_send_post = mysql_data_post.fetch_data(table_name='post')

    for data in data_to_send_post:
        kafka_producer_post.send_data(data)
        print(f"Data sent to Kafka (post): {data}")

if __name__ == "__main__":
    main()


```
pip install kafka-python mysql-connector-python

python3 consumer.py
python3 producer.py

2. 