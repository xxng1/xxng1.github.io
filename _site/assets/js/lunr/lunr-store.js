var store = [{
        "title": "프로그래머스_not yet",
        "excerpt":"not yet  ","categories": ["Programmers"],
        "tags": ["Blog","jekyll","Github","Git"],
        "url": "/programmers/pg1/",
        "teaser": null
      },{
        "title": "[2557] Hello World",
        "excerpt":" 🔍 문제     https://www.acmicpc.net/problem/2557      Hello World!를 출력하시오.    🎯 풀이  #include&lt;iostream&gt;  using namespace std;  int main() {     cout &lt;&lt; \"Hello World!\"; }   ✏️ 회고  Hello Wolrd!  ","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj2557/",
        "teaser": null
      },{
        "title": "[1110] 더하기 사이클",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/1110 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj1110/",
        "teaser": null
      },{
        "title": "[2480] 주사위 세개",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/2480 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다....","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj2480/",
        "teaser": null
      },{
        "title": "[1316] 그룹 단어 체커",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/1316 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다. 단어 N개를 입력으로 받아 그룹 단어의 개수를...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj1316/",
        "teaser": null
      },{
        "title": "[2750] 수 정렬하기",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/2750 N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오. 🎯 풀이 #include&lt;iostream&gt; #include&lt;string&gt; using namespace std; int main() { int N; cin &gt;&gt; N; int arr[1000]; int tmp; for(int i=0; i&lt;N; i++){ cin &gt;&gt; arr[i]; } for(int j=0; j&lt;N-1; j++){ for(int k=0; k&lt;N-1-j; k++){ if(arr[k]&gt;arr[k+1]){ tmp =...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj2750/",
        "teaser": null
      },{
        "title": "[10989] 수 정렬하기3",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/10989 N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오. 🎯 풀이 1. 첫 번째 풀이 ❌ #include&lt;iostream&gt; #include&lt;algorithm&gt; using namespace std; int main() { int N; cin &gt;&gt; N; int arr[100000]; for(int i=0; i&lt;N; i++){ cin &gt;&gt; arr[i]; } sort(arr, arr+N); for(int i=0; i&lt;N; i++){ cout &lt;&lt;...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj10989/",
        "teaser": null
      },{
        "title": "[10872] 팩토리얼",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/10872 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오. 🎯 풀이 1. 첫 번째 풀이 ⭕ #include &lt;iostream&gt; int factorial(int num){ if(num==0) return 1; if(num&gt;2){ num *= factorial(num-1); } return num; } int main() { using namespace std; int N; cin &gt;&gt; N; cout &lt;&lt;...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj10872/",
        "teaser": null
      },{
        "title": "[2798] 블랙잭",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/2798 카지노에서 제일 인기 있는 게임 블랙잭의 규칙은 상당히 쉽다. 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임이다. 블랙잭은 카지노마다 다양한 규정이 있다. 한국 최고의 블랙잭 고수 김정인은 새로운 블랙잭 규칙을 만들어 상근, 창영이와 게임하려고 한다. 김정인 버전의 블랙잭에서 각 카드에는 양의 정수가...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj2798/",
        "teaser": null
      },{
        "title": "[2566] 최댓값",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/2566 &lt;그림 1&gt;과 같이 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오. 예를 들어, 다음과 같이 81개의 수가 주어지면 -생략- 이들 중 최댓값은 90이고, 이 값은 5행 7열에 위치한다. 🎯 풀이 보이는...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj2566/",
        "teaser": null
      },{
        "title": "[11047] 동전 0",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/11047 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다. 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오. 🎯 풀이 #include &lt;iostream&gt; using namespace std; int arr[10] = {0,}; int main(){ int N, K; cin &gt;&gt;...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj11047/",
        "teaser": null
      },{
        "title": "[10828] 스택",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/10828 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오. 명령은 총 다섯 가지이다. push X: 정수 X를 스택에 넣는 연산이다. pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다. size: 스택에 들어있는 정수의 개수를 출력한다. empty:...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj10828/",
        "teaser": null
      },{
        "title": "[10773] 제로",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/10773 나코더 기장 재민이는 동아리 회식을 준비하기 위해서 장부를 관리하는 중이다. 재현이는 재민이를 도와서 돈을 관리하는 중인데, 애석하게도 항상 정신없는 재현이는 돈을 실수로 잘못 부르는 사고를 치기 일쑤였다. 재현이는 잘못된 수를 부를 때마다 0을 외쳐서, 가장 최근에 재민이가 쓴 수를 지우게 시킨다. 재민이는 이렇게 모든 수를 받아 적은...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj10773/",
        "teaser": null
      },{
        "title": "[18258] 큐 2",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/18258 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오. 명령은 총 여섯 가지이다. push X: 정수 X를 큐에 넣는 연산이다. pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다. size: 큐에 들어있는 정수의 개수를 출력한다. empty:...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj18258/",
        "teaser": null
      },{
        "title": "[1010] 다리 놓기",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/1010 재원이는 한 도시의 시장이 되었다. 이 도시에는 도시를 동쪽과 서쪽으로 나누는 큰 일직선 모양의 강이 흐르고 있다. 하지만 재원이는 다리가 없어서 시민들이 강을 건너는데 큰 불편을 겪고 있음을 알고 다리를 짓기로 결심하였다. 강 주변에서 다리를 짓기에 적합한 곳을 사이트라고 한다. 재원이는 강 주변을 면밀히 조사해 본 결과...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj1010/",
        "teaser": null
      },{
        "title": "[2748] 피보나치 수 2",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/2748 피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다. 이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다. n=17일때 까지 피보나치 수를 써보면 다음과 같다. 0, 1, 1, 2,...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj2748/",
        "teaser": null
      },{
        "title": "[10815] 숫자 카드",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/10815 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오. 🎯 풀이 1. 첫 번째 풀이 ❌ (이분 탐색 미사용) #include &lt;iostream&gt; using namespace std; int arrN[500000]; int...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj10815/",
        "teaser": null
      },{
        "title": "[24416] 알고리즘 수업- 피보나치 수 1",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/24416 오늘도 서준이는 동적 프로그래밍 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 오늘은 n의 피보나치 수를 재귀호출과 동적 프로그래밍으로 구하는 알고리즘을 배웠다. 재귀호출에 비해 동적 프로그래밍이 얼마나 빠른지 확인해 보자. 아래 의사 코드를 이용하여 n의 피보나치 수를 구할 경우 코드1 코드2 실행...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj24416/",
        "teaser": null
      },{
        "title": "CS_tech interview(1)",
        "excerpt":"🔔 면접때 받을 수 있는 CS 질문들 🔍 문제(toggle) CI/CD에 대해 설명하시오. CI는 빌드/테스트 자동화 과정을 의미한다. 여러 명의 개발자가 동시에 개발과 관련된 코드 작업을 할 경우에 충돌할 수 있는 문제를 해결할 수 있다. 커밋할 때마다 빌드와 일련의 자동 테스트가 이루어져 동작을 확인하고 변경으로 인해 문제가 생기는 부분이 없도록 보장한다....","categories": ["tech"],
        "tags": ["CS"],
        "url": "/tech/cstech1/",
        "teaser": null
      },{
        "title": "[11659] 구간 합 구하기 4",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/11659 수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오. 🎯 풀이 1. 첫 번째 풀이 시간 제한이 1초이다. 기본적인 반복문을 사용하여 i ~ j 사이의 값을 더하는 알고리즘의 시간복잡도는 O(n)이다. 구간 합 알고리즘을 이용하면 O(1)의 성능을 가진다. #include&lt;iostream&gt; using namespace std; int sum[100001] =...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj11659/",
        "teaser": null
      },{
        "title": "[10866] 덱",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/10866 정수를 저장하는 덱(Deque)를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오. 명령은 총 여덟 가지이다. push_front X: 정수 X를 덱의 앞에 넣는다. push_back X: 정수 X를 덱의 뒤에 넣는다. pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다....","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj10866/",
        "teaser": null
      },{
        "title": "[10816] 숫자 카드2",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/10816 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오. 🎯 풀이 1. 첫 번째 풀이 C++ Algorithm STL의 upper_bound, lower_bound를 이용한다. upper_bound : 해당 값보다 큰...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj10816/",
        "teaser": null
      },{
        "title": "[15651] N과 M(3)",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/15651 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오. 1부터 N까지 자연수 중에서 M개를 고른 수열 같은 수를 여러 번 골라도 된다. 🎯 풀이 1. 첫 번째 풀이 #include &lt;iostream&gt; using namespace std; int n, m; int arr[10]; void func(int cnt){...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj15651/",
        "teaser": null
      },{
        "title": "[12789] 도키도키 간식드리미",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/12789 인하대학교 학생회에서는 중간, 기말고사 때마다 시험 공부에 지친 학우들을 위해 간식을 나눠주는 간식 드리미 행사를 실시한다. 승환이는 시험 기간이 될 때마다 간식을 받을 생각에 두근두근 설레서 시험 공부에 집중을 못 한다. 이번 중간고사에서도 역시 승환이는 설레는 가슴을 안고 간식을 받기 위해 미리 공지된 장소에 시간 맞춰 도착했다....","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj12789/",
        "teaser": null
      },{
        "title": "[1654] 랜선 자르기",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/1654 집에서 시간을 보내던 오영식은 박성원의 부름을 받고 급히 달려왔다. 박성원이 캠프 때 쓸 N개의 랜선을 만들어야 하는데 너무 바빠서 영식이에게 도움을 청했다. 이미 오영식은 자체적으로 K개의 랜선을 가지고 있다. 그러나 K개의 랜선은 길이가 제각각이다. 박성원은 랜선을 모두 N개의 같은 길이의 랜선으로 만들고 싶었기 때문에 K개의 랜선을 잘라서...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj1654/",
        "teaser": null
      },{
        "title": "[11729] 하노이 탑 이동 순서",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/11729 세 개의 장대가 있고 첫 번째 장대에는 반경이 서로 다른 n개의 원판이 쌓여 있다. 각 원판은 반경이 큰 순서대로 쌓여있다. 이제 수도승들이 다음 규칙에 따라 첫 번째 장대에서 세 번째 장대로 옮기려 한다. 한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다. 쌓아 놓은 원판은 항상...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj11729/",
        "teaser": null
      },{
        "title": "[1904] 01타일",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/1904 지원이에게 2진 수열을 가르쳐 주기 위해, 지원이 아버지는 그에게 타일들을 선물해주셨다. 그리고 이 각각의 타일들은 0 또는 1이 쓰여 있는 낱장의 타일들이다. 어느 날 짓궂은 동주가 지원이의 공부를 방해하기 위해 0이 쓰여진 낱장의 타일들을 붙여서 한 쌍으로 이루어진 00 타일들을 만들었다. 결국 현재 1 하나만으로 이루어진 타일...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj1904/",
        "teaser": null
      },{
        "title": "서점 웹사이트 만들기[1]_기획",
        "excerpt":"사이트 프로젝트_서점 웹사이트 제작 사이드 프로젝트로 node.js 프레임워크를 이용하여 서점 웹사이트를 제작해보았다. 목록을 탭하면 해당 글로 이동합니다.(진행중) 기능목록 부트스트랩(Bootstrap) 적용 ⭕ 베스트셀러,이달의 책/, E-Book 탭 구현 ❌ 로그인/로그아웃 구현 ❌ 책 사진/이름/저자/가격 구현 ❌ 장바구니(카트) 담기 구현 ❌ 게시판 구현(CRUD 가능) ❌ 관리자 아이디 구현(CURD 가능) ❌ 검색 기능 구현...","categories": ["nodejs"],
        "tags": ["web"],
        "url": "/nodejs/book1/",
        "teaser": null
      },{
        "title": "서점 웹사이트 만들기[2]_부트스트랩 적용",
        "excerpt":"부트스트랩(Bootstrap) 사용 아무리 게임을 잘 만들어도 디자인 부분이 별로면 흥미가 떨어지듯이, 웹 페이지도 코드를 잘 짜고 기능들을 잘 구현했다한들 디자인은 결코 놓칠 수 없다. 그렇기에 사용되는 것이 부트스트랩이다. 부트스트랩이란 웹페이지의 디자인을 도와주는 프론트엔드 프레임워크인데, 부트스트랩을 사용하는 방법에는 직접 다운로드하는 방법과, CDN방식으로 링크를 거는 방법이 있다. 나는 CDN방식으로 부트스트랩을 사용해보았다. CDN방식으로...","categories": ["nodejs"],
        "tags": ["web"],
        "url": "/nodejs/book2/",
        "teaser": null
      },{
        "title": "[15649] N과 M(1)",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/15649 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오. 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열 🎯 풀이 1. 첫 번째 풀이 #include &lt;iostream&gt; using namespace std; int n, m; int arr[10]; bool visited[10] = {0,}; void dfs(int cnt){...","categories": ["BOJ"],
        "tags": ["Algorithm","C++"],
        "url": "/boj/boj15649/",
        "teaser": null
      },{
        "title": "C++ 첫 수업 테스트",
        "excerpt":"2학년 때 들어야 했던 C++ 강의를 이제서야 수강하게 됐다. 수강신청은 웹보다 어플이 수강신청하기 쉽다 쉽다 했지만 내 손속도로는 컴퓨터로도 극복 가능할 줄 알았다 (이번에 결국 어플로함) 우리학교에서 컴공 교수님들중에 명강의를 뽑는다고 하면 이 분의 강의를 다들 빼놓지 않곤 하는데, C++ 과목을 운 좋게 이 분의 강의로 들을 수 있게 되었다....","categories": ["cpp"],
        "tags": ["cpp","programming"],
        "url": "/cpp/1/",
        "teaser": null
      },{
        "title": "[11399] ATM",
        "excerpt":"🔍 문제 https://www.acmicpc.net/problem/11399 인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM앞에 N명의 사람들이 줄을 서있다. 사람은 1번부터 N번까지 번호가 매겨져 있으며, i번 사람이 돈을 인출하는데 걸리는 시간은 Pi분이다. 사람들이 줄을 서는 순서에 따라서, 돈을 인출하는데 필요한 시간의 합이 달라지게 된다. 예를 들어, 총 5명이 있고, P1 = 3, P2 = 1,...","categories": ["BOJ"],
        "tags": ["C++","Greedy"],
        "url": "/boj/boj11399/",
        "teaser": null
      },{
        "title": "react basic",
        "excerpt":"React? 웹 어플리케이션의 UI를 효과적으로 구축하기 위해 사용하는 Javascript 기반 라이브러리. 앱처럼 부드럽게 동작하는 html을 제작하기 위해 사용. React install node.js 홈페이지 에서 node.js 다운로드 후 터미널에서 아래 명령어 차례로 실행 npm -v create-react-app create-react-app -v cd &lt;파일경로&gt; create-react-app &lt;프로젝트명&gt; npm run start React basic JSX 문법 리액트의 문법으로 자바스크립트의...","categories": ["react"],
        "tags": ["react"],
        "url": "/react/git/",
        "teaser": null
      },{
        "title": "Spring Boot 설치/경로설정",
        "excerpt":"Spring Boot install vscode 확장파일설치 java.home 경로설정 vscode 설정 -&gt; javahome검색, settings.json 버전에 맞는 프로젝트 생성 Spring Boot 실행/간단 경로 설정 실행 Spring Boot Dashboard에서 실행 또는 run/debug 로 실행 경로 설정 @RequestMapping(\"/\") String home() { return \"루트\"; } @RequestMapping(\"/test1\") String hsdaa() { return \"/test1\"; } 위와 같은 방법으로 간단하게...","categories": ["spring"],
        "tags": ["spring install"],
        "url": "/spring/springbasic1/",
        "teaser": null
      },{
        "title": "Recoil와 atom",
        "excerpt":"Recoil React 애플리케이션에서 상태 관리를 효과적으로 수행하기 위한 라이브러리로, 전역 상태를 관리하고 컴포넌트 간에 상태를 공유할 수 있게 해준다. Atom Recoil에서 사용되는 상태 단위(컴포넌트 간에 공유할 수 있는 상태 값) 각각의 전역 상태에 대한 atom이 생성되고 해당 상태를 구독하는 구성 요소만 리렌더링 (= 불필요한 리렌더링을 방지) 예시 // Recoil 상태...","categories": ["react"],
        "tags": ["react"],
        "url": "/react/recoil_atom/",
        "teaser": null
      },{
        "title": "Docker Basic",
        "excerpt":"Docker 서버 구축 Docker? Docker는 컨테이너 기반 가상화 기술을 제공하는 플랫폼으로, 소프트웨어를 패키지화하고 실행하는 데 사용됩니다. Docker를 사용해서 로컬 뿐만 아니라 어디서든 서버를 구축할 수 있습니다. Docker 서버 구축 설치 작업 Docker 설치 Docker Hub 가입 실습을 위한 VM(UTM(Mac) 또는 VirtualBox(window))설치 및 Linux 가상환경 세팅 VirtualBox와는 다르게 UTM을 사용하게 된다면...","categories": ["Docker"],
        "tags": ["server"],
        "url": "/docker/docker/",
        "teaser": null
      },{
        "title": "[Docker Container] WAS - DB 연결",
        "excerpt":"# Docker 컨테이너를 활용한 3-Tier Architecture 구성 WS - WAS - DB 연결 - (3) WAS - DB Connecting 기본적으로 도커 컨테이너를 실행시키고, 도커 컨테이너 쉘 bash로 작업한다. WAS(Tomcat) - DB(MariaDB) 연결 MariaDB 테스트테이블 생성 데이터베이스 이름: mydb 테이블 이름: users 테이블 칼럼: id, username, email 연결을 위한 JDBC(자바 프로그램이...","categories": ["Docker"],
        "tags": ["SysArch"],
        "url": "/docker/docker1/",
        "teaser": null
      }]
