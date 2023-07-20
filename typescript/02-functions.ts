// Function

// 매개변수에 타입을 명시하지 않으면 자동으로 any 타입이 지정되기 때문에 애너테이션을 이용하여 타입을 써줘야함!
const square = (num: number) => {
  return num * num;
};

// 매개변수가 여러 개 일때는 자바스크립트와 마찬가지로 전달하는 순서가 중요
const doSomething = (name: string, age: number, isFunny: boolean) => {
  return `${name} ${age} ${isFunny}`;
};

// 기본 매개변수
const greet = (name: string = 'stranger') => {
  return `Hi there, ${name}`
};

// 반환값의 타입을 명시하고자 할 때
const sum = (x: number, y: number): number => {
  return x + y;
};
// 변수 타입을 추론하듯이 반환값도 추론하기 때문에 굳이 적어줄 필요는 없지만 반환값을 예측 가능하고 확실히 하기 위해 적는 것이 좋을 때도 있음
const rando = (num: number) => {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num
};
// 반환값의 타입이 여러 개일 때 => 유니온(union) 타입

// 문자열 배열에 대해서 매핑하기위해 익명함수를 사용할 때
const colors = ['red', 'yellow', 'orange'];
colors.map(color => {
  color.toUpperCase();
});
// 매개변수에 타입을 전달하지 않으면 자동으로 any 타입으로 변환되지만 타입스크립트에서는 컨텍스트를 파악해서 매개변수의 타입을 정해줌.
// 애너테이션을 써도 되지만 굳이 쓰진 않는다!

// void type : 아무것도 반환하지 않을 때 사용, 변수보다는 함수에서 사용되고 사용하는 경우는 드묾, 뒤에서 undefined 반환
const printTwice = (msg: string): void => {
  console.log(msg);
  console.log(msg);
};
// never type : 함수가 아무것도 반환하면 안된다는 것을 나타냄, 예외를 발생시키는 함수나 반복문 함수 등
const someError = (msg: string): never => {
  throw new Error(msg)
};

// never 와 void 둘 다 반환값이 없지만 void는 undefined로 엄밀히 말하면 값임. never는 절대 반환하지 않음!