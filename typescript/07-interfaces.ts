// 인터페이스(interface) : 객체의 형태를 묘사. 객체의 다양한 프로퍼티와 메서드를 묘사하는데 사용됨!
// 객체에만 사용되고 유니온 타입에 쓸 수 없음! type alias 와 유사함

// type alias
type Point01 = {
  x: number;
  y: number;
};
// interface
interface Point {
  x: number;
  y: number;
};
const pt: Point = {x: 42, y: 1};


// 인터페이스와 선택적 프로퍼티, readonly
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  //sayHi(): string;
};
const Thor: Person = {id: 1, first: "Chris", last: "Hemsworth", nickname: "Thor", sayHi: () => "Hello"};


// 매개변수를 받는 메서드
// 인터페이스는 메서드를 타입을 정의하는 방법이 아니기 때문에 중괄호를 사용하지 않고 타입만 정의. 인터페이스에서의 메서드는 인자의 타입과 반환값의 타입만 정의
interface Product {
  name: string;
  price: number;
  applyAccount(discount: number): number;
};

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyAccount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  }
};


//인터페이스에 속성 추가
interface Dog {
  name: string;
  age: number;
};
// 다른 파일이거나 라이브러리를 사용하는 등의 이유로 인터페이스에 새로운 속성을 추가해야할 때 다시 interface를 열어서 속성 추가
interface Dog {
  breed: string;
  bark(): string;
};
// 인터페이스를 덮어쓰는게 아닌 속성이 추가됨!
const choco: Dog = {
  name: "Choco",
  age: 1,
  breed: "Husky",
  bark() { return "WOOF! WOOF!"}
};


// 인터페이스 확장(상속), 자바스크립트에서 부모클래스의 기능을 상속받는것과 비슷함
// extends 키워드 사용, 콤마(,)를 이용해서 1개 이상도 확장 가능
interface ServiceDog extends Dog {
  job: "drag sniffer" | "bomb" | "guide dog";
};
const candy: ServiceDog = {
  name: "Candy",
  age: 2,
  breed: "Lab",
  bark() { return "WOOF!"},
  job: 'guide dog'
};

// 다중확장
interface Human {
  name: string;
};
interface Employee {
  readonly id: number;
  email: string;
};
interface Developer extends Human, Employee {
  level: string;
  languages: string[];
};
const pierre: Developer = {
  name: "Pierre",
  id: 12,
  email: "test@test.com",
  level: "senior",
  languages: ["JS", "TS", "Python"]
};


// type alias vs interface
// 1) interface 는 객체의 형태를 묘사할 때만 사용 -> 타입이 여러개일 때는 사용할 수 없음
// 2) interface 는 유니온 타입과 리터럴 타입을 사용할 수 없음 -> 객체에서만 사용!
// 3) types 는 한번 정의하고 나서 속성을 추가할 수 없음 -> interface 는 다시 열어서 속성을 추가할 수 있음
// 4) tpyes 는 확장할 수 없고 여러개를 쓸 경우 & 를 써서 연결해야함 -> interface는 extends 키워드 사용