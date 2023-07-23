// Generic : 여러 타입에서 사용할 수 있는 재사용 함수나 재사용 클래스를 정의함.
// 모든 타입을 허용하고 동일한 타입을 반환하게 할 수 있음

// 배열을 정의하는 방법 중에 Array<type> 과 비슷한 방식임 -> 특정 타입을 사용하면 특정 타입의 값을 반환
const color: Array<string> = [];
// Array에 호버하면 interface Array<T> -> Array가 interface의 이름이 되고 T 는 type의 T를 말함.

// dom에 접근할 때 typescript는 기본 Elemnt | null 을 추론.
const inputEl = document.querySelector<HTMLInputElement>('#name')!;
// 타입을 지정하면 querySelector가 반환할 타입도 지정할 수 있음. 예시에서는 HTMLInputElement를 지정했으니까 input관련 객체를 반환함! -> input의 value에 접근할수 있게되는 이유


// 각각 입력받은 타입을 그대로 반환해주는 함수가 있다고 가정
const numberIdentity = (item: number): number => {
  return item;
};
const stringIdentity = (item: string): string => {
  return item;
};
const booleanIdentity = (item: boolean): boolean => {
  return item;
};
// 이 외에도 배열이나 객체 등 타입마다 각각 함수를 만들어줘야함

// any 타입으로 작성한다면?
const anyIndentity = (item: any): any => {
  return item
};
// 이렇게 만들면 타입스크립트 기본 취지에 어긋나기도 하고 입력타입과 출력타입이 같을 것이라고 보장할 수 없음.


// 그래서 사용하는 제너릭 함수!
function identity<Type>(item: Type): Type {
  return item;
};
const identityArrow = <Type>(item: Type): Type => {
  return item;
};
// 제너릭 파라미터 사용 -> 관례적으로 Type 이나 T , 세 부분의 이름만 통일한다면 다른 단어 사용할 수 있음.
interface Dog {
  name: string;
  breed: string;
}
identity<number>(1)
identity<string>("Hello");
identity<Dog>({name: "LEON", breed: "Husky"});


// 다른 예시
const getRandomElement = <T>(list: T[]): T => {
  const randomIdx = Math.floor(Math.random() * list.length);
  return list[randomIdx];
};
getRandomElement<number>([1, 2, 3, 4, 5]);
getRandomElement<string>(['H', 'I']);
// 전달되는 인수의 타입을 바탕으로 타입 파라미터를 추론할 수 있기 때문에 굳이 안적어줘도 되지만 적어야하는 경우가 있기도 함! -> dom!
getRandomElement(['chris', 'hemsworth']);


// 다른 예시 - 두 개의 타입 파라미터, 다른 타입을 받는 경우
// 숫자나 불리언에 객체분해를 적용하면 빈 객체가 반환됨 -> 타입 파라미터의 형태를 제한해야하는 상황이 올 수 있음! extends 키워드 샤용
const merge = <T extends object, U extends object>(object1: T, object2: U) => {
  return {...object1, ...object2};
}
const merged = merge({name: 'chris'}, {pet: ['dog', 'cat']});
// extends 로 제한하는 타입 파라미터의 형태는 인터페이스나 타입 별칭이 될 수도 있음!


// 기본 타입 파라미터 -> 기본 매개변수 만드는 방법과 같음
const makeEmptyArray = <T = number>(): T[] => {
  return [];
};
const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();


// 제너릭 클래스
interface Song {
  title: string;
  artist: string;
};
interface Video {
  titls: string;
  creator: string;
  resolution: string;
}

class MySong {
  public song: Song[] = [];
}
class MyVideo {
  public video: Video[] = [];
}
// 하나하나 만들지 않고 제너릭 클래스를 만드는 경우
class PlayList<T> {
  public queue: T[] = [];
  add(item: T): void {
    this.queue.push(item);
  }
};

const songs = new PlayList<Song>();
const videos = new PlayList<Video>();

// tsx 파일에서 타입 파라미터를 사용할 때는 쉼표 써줘야함! -> <T,>