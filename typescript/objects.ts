// object
// 객체를 만드는 방법은 두 가지! 변수에 애너테이션을 선언하는 것처럼 만들거나 함수를 만들어서 매개변수 애너테이션으로 선언

// 매개변수 선언 방식
const printName = (person: {first: string, last: string}): void => {
  console.log(`${person.first} ${person.last}`);
};
printName({first: "Chris", last: "Hemsworth"});
// person이라는 이름을 가진 객체로 first 와 last 는 객체의 key가 되고 값으로 문자열을 지정함.
// 객체와 별개로 함수에서 반환하는 값이 없기 때문에 void를 씀! => 함수에서 기대할수 있는 값을 예측할 수 있기 때문에 써주는 편이 좋음.

// 프로퍼티를 추가할 때
printName({first: "Chris", last: "Hemsworth",/*  ninkname: "Thor" */}); // 오류 발생
const thunder = {first: "Chris", last: "Hemsworth", nickname: "Thor"};
printName(thunder); // 오류는 발생하지 않음!
// 객체 리터럴 방식으로 속성을 추가하면 에러남! -> 지정된 속성과 타입 이외의 값을 오류로 인삭
// 변수에 할당해서 전달하면 변수안에 들어있는 값이 지정된 값과 같은지 확인하고 나머지는 무시하는 방식으로 이루어짐
// 변수에 할당하는 방식은 값이 맞는지 재확인하도록 만듦. 객체 리터럴 방식은 쓰는 동시에 확인

// 변수 선언 방식
let coordinate: {x: number, y: number} = {x: 28, y: 30};

// 함수 선언 방식
function randomCoordinate(): {x: number, y:number} {
  return {x: Math.random(), y: Math.random()};
};
/* 
const randomCoordinate = (): {x: number, y:number} => {
  return {x: Math.random(), y: Math.random()};
};*/


// type alias : 타입을 재사용하고 이름을 지정하는 방법
// 여러 프로퍼티를 가지는 객체타입에서 활용

// 관례적으로 첫 글자는 대문자를 사용, 객체의 패턴
type Point = {x: number, y: number};

const coordinatetwo: Point = {x: 28, y: 30};

const randomCoordinatetwo = (): Point => {
  return {x: Math.random(), y: Math.random()};
};

const doublePoint = (point: Point): Point  => {
  return {x: point.x * 2, y: point.y * 2};
};
// 함수해석 : doublePoint라는 함수는 point라는 이름을 가지고 x,y의 속성이 있는 객체를 전달받고 특정한 형태의 객체를 다시 반환. 두번째 Point는 반환되어야하는 객체의 애너테이션!

// 중첩 객체와 앨리어스
type Song = {
  title: string,
  artist: string,
  numStreams: number,
  credits: {
    producer: string,
    writer: string
  }
};

const calculatePayout = (song: Song): number => {
  return song.numStreams * 0.0033;
}

const printSong = (song: Song): void => {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 2985349,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North"
  }
};

const earning = calculatePayout(mySong);
console.log(earning);
printSong(mySong);


// 선택적 프로퍼티 : 키? 의 형태
type Point3D = {x: number, y: number, z?: number};

const myPoint: Point3D = {x: 6, y: 8}


// readonly : 객체내의 특정 프로퍼티를 표시해서 읽기전용으로 만들어줄 때, 배열이나 클래스에 접근할 때
// readonly가 적용된 프로퍼티의 값이 배열이나 객체일 경우에는 값을 변경할 수 있음 -> 참조값이기 때문, 원시값의 경우에만 값 변경 불가

type User = {
  readonly id: number,
  name: string
};

const user: User = {
  id: 123,
  name: "Chris"
};
/* user.id = 재할당불가 */


// 교차 타입(intersection type) : & 를 사용해서 여러 type 연결
type Circle = {
  radius: number
};
type Color = {
  color: string
};
const colorfulCircle: Circle & Color = {
  radius: 10,
  color: "darkgreen"
};

// 새로운 프로퍼티 할당
type Cat = {
  numLives: number
};
type Dog = {
  breed: string
};
type CatDog = Cat & Dog & {age: number};

const cherry: CatDog = {
  numLives: 9,
  breed: "Husky",
  age: 2
};
