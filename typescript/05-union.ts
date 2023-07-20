// union type : 타입이 여러개 일 때

let age: number | string = 21;
age = 25;
age = "25";

type Point = {
  x: number;
  y: number;
};
type Loca = {
  lat: number;
  long: number;
};

let coordinates: Point | Loca = {x: 35, y: 24};
coordinates = {lat: 35.24, long: 35.24};

// 함수에서의 유니온 타입
const pringAge = (age: number | string): void => {
  console.log(`You are ${age} years old.`);
};

// 타입 좁히기 (type Narrowing) : 유니온 타입에 따른 상황 처리
const calculateTax = (price: number | string, tax: number): number => {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
};

// 유니온 타입을 가진 배열
const numAndText: (number | string)[] = [];

const coords: (Point | Loca)[] = [];

// 리터럴 타입 : 타입처럼 특정한 형식만 값으로 가질 수 있음
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Upset"

type DayOfWeek = "Monday" | "Tusday" | "Wednesday" | "Thusday" | "Friday" | "Saturday" | "Sunday";
let today: DayOfWeek = "Monday";