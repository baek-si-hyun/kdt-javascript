# 자바스크립트(Javascript)
	컴파일 과정 없이 브라우저 내부의 자바스크립트 처리기(인터프리터)에 의해 바로 실행된다.
	※ 개발이 발전됨에 따라 컴파일 과정이 가능해졌으며, Node.js로 서버환경을 구축한다.

### 웹 페이지에서 자바스크립트의 역할
	웹 페이지는 3가지(HTML, CSS, JS) 코드가 결합되어 작성된다.
	자바스크립트는 사용자의 입력을 처리하거나 웹 애플리케이션을 작성하는 등
	웹 페이지의 동적 제어에 사용된다.

- 사용자의 입력 및 연산
    키, 마우스 등의 입력과 연산은 오직 자바스크립트로만 처리가 가능하다.

- 웹 페이지 내용 및 모양의 동적 제어
    HTML 태그의 속성이나 콘텐츠, CSS 속성 값을 변경해서
    웹 페이지의 동적인 변화를 일으키는 데에 활용된다.

- 브라우저 제어
    브라우저 윈도우의 크기나 모양 변경, 새 윈도우나 탭 열기, 다른 웹 사이트 접속,
    브라우저의 히스토리 제어 등 브라우저의 작동을 제어하는 데 활용된다.

- 웹 서버와의 통신
    웹 페이지가 웹 서버와 데이터를 주고 받을 때 활용된다.

- 웹 애플리케이션 작성
    자바스크립트 언어로 활용할 수 있는 많은 API를 제공하므로,
    웹 브라우저에서 실행되는 다양한 웹 애플리케이션을 개발할 수 있다.
<hr/>
<br/><br/>

## Node.js 아키텍처
    자바스크립트 코드 실행에 필요한 런타임으로 V8엔진을 사용하고, 
    자바스크립트 런타임에 필요한 이벤트 루프 및 운영체제 시스템 API를 사용하는 데는
    libuv(리버브) 라이브러리를 사용한다.
    
<img src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/83165c61-02ec-42de-8c8c-110e7602e500/public"/>

1. 애플리케이션에서 요청이 발생하면, V8엔진은 자바스크립트 코드를 바이트 코드 혹은 기계어로 변경한다.
2. 자바스크립트로 작성된 Node.js의 API는 C++로 작성된 코드로 사용된다.
3. V8 엔진은 이벤트 루프가 필요하기 때문에 libuv를 사용하고, 전달된 요청을 libuv의 이벤트 큐에 추가한다.
4. 이벤트 큐에 쌓인 요청은 이벤트 루프에 전달되고, 운영체제 커널에 비동기 처리를 요청한다.
    운영체제 내부적으로 비동기 처리가 힘든 경우(DB, 네트워크 통신, 파일 처리 등)는 워커 쓰레드에서 처리한다.
5. 운영체제의 커널 혹은 워커 쓰레드가 완료한 작업은 다시 이벤트 루프로 전달된다.
6. 이벤트 루프에서 콜백으로 전달된 요청에 대해 완료 처리 후 V8로 넘긴다.
7. 완료 처리된 응답은 애플리케이션으로 전달된다.
<br/><br/><br/><br/>

### 콜 스택
	싱글 쓰레드란 콜 스택을 1개 가지고 있다는 뜻이다.
	하지만, 1개의 콜 스택으로는 마지막 작업이 앞에 있는 작업을 모두 기다려야하기 때문에
	libuv에 있는 이벤트 루프로 보낸다.
<br/><br/>

### 이벤트 기반 아키텍처

<img src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/794ac370-77ca-4541-5b3e-9eff2dff9e00/public"/>

1. V8의 콜 스택에 쌓인 뒤 I/O 처리가 필요한 코드는 이벤트 루프로 보낸다.
2. 이벤트 루프에서 처리될 작업을 태스크 큐에 담는다.
3. 태스크 큐에 있는 작업을 이벤트 루프로 보내서 루프를 실행하고 운영체에 또는 쓰레드 워커에서 I/O 처리를 진행한다.
4. 쓰레드 워커와 운영체제는 받은 요청에 대한 결과를 이벤트 루프로 다시 돌려준다.
5. 이벤트 루프에서는 결과값에 대한 코드를 콜 스택에 다시 추가한다.
<br/><br/>

### 이벤트 루프
	운영체제의 비동기 I/O 기능을 사용하거나, 쓰레드 풀을 사용해서 모든 작업을 비동기로 처리한다.
	여러 큐를 사용해서 특정 우선순위대로 작업들을 처리해준다.

<img src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e7ca0484-7d79-4662-7c3c-6504b4861000/public"/>

1. 이벤트 루프의 시작 및 각 반복의 마지막에 루프가 활성화 상태인지 체크한다.
2. 타이머 단계에서 타이머 큐를 처리하며, 이 때 setTimeout(), setInterval()을 처리한다.
    타이머가 실행되는 순서는 확실하지 않고, 프로세스의 퍼포먼스에 따라 다르다.
4. 펜딩(pending) I/O 콜백 단계에서는 다음 반복으로 연기된 콜백을 처리한다.
5. 유휴, 준비 단계를 통해 다음 폴 단계의 준비를 내부적으로만 진행한다.
6. 폴 단계에서는 새로운 연결(소켓 맺기, 파일 읽기, DB 커넥션 생성하기 등) 작업을 진행한다.
    각 작업은 쓰레드 풀을 사용한다.
7. 검사 단계에서는 폴 단계의 성공 실패 여부를 판단하고 이를 setImmediate()로 처리한다.
    I/O 사이클에 스케줄링 되었다면, setTimeout()보다 setImmediate()가 항상 먼저 실행된다.
8. 종료 콜백 단계에서는 콜백의 종료 처리(파일 닫기, 커넥션 종료 등)를 한다.
9. 각 단계 사이마다 nextTickQueue와 microTaskQueue에 있는 작업이 먼저 실행된다.
    process.nextTick()함수를 통해 nextTickQueue에 작업을 추가할 수 있고,
    이벤트 루프가 진행되기 전에 에러를 핸들하며 필요 없는 자원을 해제 및 재요청 처리까지 가능하다.
    microTaskQueue에는 Promise로 만든 콜백 함수가 추가된다.



<hr/>

### 자바스크립트를 작성할 수 있는 위치
    1. HTML 태그의 이벤트 리스너 속성에 작성
        HTML 태그에는 마우스가 클릭되거나 키보드의 키가 입력되는 등의 이벤트(반응)가 발생할 때,
        처리하는 코드를 등록하는 리스너 속성이 있다.

    2. <script></script> 태그 안에서 작성
        <head></head>, <body></body>, body 태그 밖 등 어디든 들어갈 수 있다.
        웹 페이지 내에서 여러 번 작성할 수 있다.

    3. .js 자바스크립트 파일에 작성
        자바스크립트 코드를 확장자가 .js인 별도의 파일로 저장하고,
        <script src=".js경로"></script> 와 같이 가져온다.

    4. URL 부분에 작성
        <a>태그의 href 속성에도 자바스크립트 코드를 작성할 수 있다.
        하지만 href 속성에서 자바스크립트 코드를 쓸 때에는 
        "javascript:" 라는 키워드를 작성해야 한다.
<hr/>
<br/>

### 데이터 타입과 변수
1. 자바스크립트 식별자(이름)

####
    식별자(identifier)란 자바스크립트 개발자가 변수, 상수, 함수에 붙이는 이름이다.
    식별자를 만들 때 다음 규칙을 준수해야 한다.

    - 첫 번째 문자 : 알파벳, 언더바, $문자만 사용 가능
    - 두 번째이상 문자 : 알파벳, 언더바, 0-9, $사용 가능
    - 대소문자 구분 : data와 dAta는 다른 식별자이다.
    - 키워드(예약어) 사용 불가

2. 문장 구분
####
    세미콜론으로 문장과 문장을 구분한다.
    한 줄에 한 문장만 있는 경우 세미콜론을 생략할 수 있다.

    i = i + 1
    j = j + 1;
    k = k + 1; m = m + 1;
    n = n + 1 p = p + 1 (X)

3. 주석
####
    - 한 줄 주석 : //
    - 범위 주석  : /* */


5. 데이터 타입(typeof())
####
    - 숫자 타입(number) : 42, 3.14, ...
    - 논리 타입(bool) : true, false
    - 문자열 타입(string) : "안녕", "하세요", "35", 'a', "A", ...
    - 객체 레퍼런스 타입(object) : Object, Array, Math, Date,...
    - undefined : 타입이 정해지지 않은 것을 의미한다.
    - null : 값이 정해지지 않은 것을 의미한다.


7. 변수
####
    - var 키워드: 함수의 영역만 영역으로 판단한다.
    - let 키워드: 모든 영역을 영역으로 판단한다.


9. 상수
####
    - const 키워드: 값을 변경시킬 수 없다.

11. 지역변수와 전역변수
####
    - 변수의 사용 범위(scope)에 따라서 전역변수(global)와 지역변수(local)로 나뉜다.
    - 전역변수: 함수 밖에서 선언된 변수
    - 지역변수: 영역 안에서 선언된 변수


















