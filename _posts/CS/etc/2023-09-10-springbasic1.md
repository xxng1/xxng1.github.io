---
title:  "Spring Boot 설치/경로설정"
excerpt: "spring"

categories:
  - spring
tags:
  - [spring install]

toc: true
toc_sticky: false
 
date: 2023-09-10
last_modified_at: 2023-09-10
sidebar_main: true
---
## Spring Boot install
1. vscode 확장파일설치
2. <b>java.home 경로설정</b>
  - vscode 설정 -> javahome검색, settings.json
  ![image](https://github.com/xxng1/xxng1.github.io/assets/114065532/c203885d-5f58-4cac-b77d-b60a87dce626)
  
3. 버전에 맞는 프로젝트 생성

## Spring Boot 실행/간단 경로 설정

1. 실행
- Spring Boot Dashboard에서 실행 또는 run/debug 로 실행
2. 경로 설정
~~~java
	@RequestMapping("/")
	String home() {
		return "루트";
	}
	@RequestMapping("/test1")
	String hsdaa() {
		return "/test1";
	}
~~~
- 위와 같은 방법으로 간단하게 경로 추가 가능
- 실행화면
![image](https://github.com/xxng1/xxng1.github.io/assets/114065532/b60e789d-74ee-4dd4-aac7-5bc362ffb7dc)