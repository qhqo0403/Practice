// Type annotation : 타입 선언 방식
// const(or let) var: type = value 의 형태!

// 문자열
let myAwesomeValue: string = 'So Awesome!';
// 변수의 타입이 문자열로 인식되기 때문에 변수에 .(체이닝)을 입력하면 자동으로 문자열 메서드 목록이 표시 됨

// 숫자
let number: number = 10;

// 불리언
let bool: boolean = true;

// 추론(Inferencs) : typescript는 변수에 할당된 값을 추론할 수 있기때문에 굳이 매번 애너테이션을 써줄 필요는 없음
// 애너테이션이 필요한 경우는 따로 있음!

// any type : 모든 타입을 할당할 수 있음 -> 지양하는 쪽으로
let thing: any = "hello";
thing = 1;
thing = true;
// 타입 추론으로 any 가 할당되는 것을 방지하고자 할 때 타입 애너테이션을 쓰는 상황!
