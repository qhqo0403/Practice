// non-null 연산자
// typescript는 DOM의 모든 타입정의를 자동으로 인지함. -> dom 관련 메서드를 사용할 수 있는 이유.
// 특정 요소는 타입 인지를 위해 라이브러리를 추가해야할 수도 있음.

const btn = document.querySelector('.btn');
// dom요소에 접근을 하면 자동으로 dom 타입을 인지함. 단 선언된 변수의 타입은 Element | null (유니온타입) 으로 인식함

// 예를들어 버튼에 addEventListener 를 이용하여 click 이벤트를 적용할 때 typescript는 버튼이 null 일 수도 있기 때문에 오류를 발생시킴.
btn?.addEventListener('click', () => {}); 
// ?를 이용해서 버튼이 있을 경우에 이벤트를 실행하라는 의미로 사용할 수 있음
// 인터페이스에서 선택적 프로퍼티를 의미할 때 사용하는 ? 와 같은 의미

// 다른 방식
const clickBtn = document.querySelector('.btn')!;
// 선언할 때 마지막에 ! 를 써서 null 이 아닌 값임을 표현할 수 있음
// 확실한 상황에서 쓰는 것이 좋고 typescript의 의미를 떨어트리는 표현이라 엄청 선호하는 편은 아님