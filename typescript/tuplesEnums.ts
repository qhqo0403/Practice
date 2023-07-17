// 튜플(tuple) : 배열 타입이지만 길이와 프로퍼티의 타입,순서가 고정되어 있음. 많이 사용하지는 않음

const color: [number, number, number] = [255, 255, 255];
// 배열길이와 값들의 타입과 순서를 지정할 수 있음!

type HTTPResponse = [number, string];

const successRes: HTTPResponse = [200, "OK"];
// 배열의 속성값을 변경하는것은 안되지만 push, pop 으로 추가하거나 제거하는 것은 가능 => 기능상 가능한 것, 의미는 대체로 없음

//튜플로 배열을 만들 때 => 상위 배열은 튜플의 형식과 상관없음
const responses: HTTPResponse[] = [[404, "Not Found"]];


// 이넘(Enum) : 재사용할 수 있는 명명된 상수들의 집합. 관례상 대문자로 작성.
// 독립적인 변수나 타입을 설정하지 않고 특정 상태들을 선언한 집합
// enum을 만들고 값을 할당하지 않으면 자동으로 0 부터 값이 매겨짐, 요소가 늘어날수록 +1. => 첫번째 요소에 5를 할당하면 그 다음값은 자동으로 6 
enum OrderStatus {
  PENDING = 5,
  SHIPPED,
  DELIVERED,
  RETURNED
};

const myStatus = OrderStatus.DELIVERED;

const isDeliverd = (status: OrderStatus): boolean => {
  return status === OrderStatus.DELIVERED;
};
isDeliverd(OrderStatus.DELIVERED);

// 문자열도 값으로 지정할 수 있고 타입도 섞어서 만들수 있음!
enum ArrowKey {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 404
};

// 생각나는게 자바스크립트에서 특정 상태인 문자열을 쓸 때 오타로 인한 에러를 방지하기 위해서 문자열 변수를 만들어서 썼던것과 비슷하게 연결할 수 있을듯함! 특정 상태에 대한 문자열들을 선언하고 관리, 자동완성 기능 이용

// enum 은 자바스크립트로 컴파일하면 enum의 내용이 객체로 생성되는 코드가 추가됨! 타입스크립트의 코드로 인해 자바스크립트 내의 코드가 추가되는것에는 긍정적이지 않을수도 있음!
// enum 앞에 const 를 추가하면 자바스크립트로 컴파일시 추가 코드가 생성되지 않고 enum을 사용한 곳에 지정된 숫자나 문자(값)으로 변환되도록 할 수 있음!