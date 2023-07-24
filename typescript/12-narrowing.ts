// Type Narrowing : 매개변수의 타입이 확실하지 않을 때 타입에 따른 로직을 만드는 것

// typeof guard : 문자열, 숫자, 불리언과 같은 원시값을 처리할 때 유용
const triple = (value: number | string): number | string => {
  if (typeof value === 'string') {
    return value.repeat(3);
  };
  return value * 3;
};


// Truthiness guard : null, undefined, falsy 값을 좁히거나 제거할 수 있음
const someEl = document.querySelector('.thing');
if (someEl) {
  someEl
} else {
  someEl
};

const printLetter = (word?: string) => {
  if (word) {
    word
  } else {
    word
  }
};
// else 의 word 가 string | undefined 인 이유는 빈 문자열이 falsy 지만 문자열이기 때문.


// equality narrowing -> 등호 비교는 삼중등호만 사용하기! 
const someFunc = (x: string | number, y: string | boolean): void => {
  if (x === y) {
    x
    y
  }
};


// in 연산자
interface Movie {
  title: string;
  duration: number;
};
interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
};

const getRuntime = (media: Movie | TVShow): number => {
  if ('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}


// instanceof narrowing : 클래스를 사용하는 경우 특정 클래스의 인스턴스의 값이 존재하는지 확인하는 방법
const printDate = (date: string | Date): void => {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
};

class User {
  constructor(public username: string) {}
};
class Company {
  constructor(public name: string) {}
};
const printName = (entity: User | Company) => {
  if (entity instanceof User) {
    entity
  } else {
    entity
  }
};
// 구별이 가능한 속성이 있는 경우에는 in 을 사용해도 되지만 만약 속성 이름까지 같다면 instanceof 사용


// 타입명제(type predicates) : 재사용 가능한 함수와 타입명제 구문을 사용해서 타입좁히기!
interface Cat {
  name: string;
  numLives: string;
}
interface Dog {
  name: string;
  breed: string
};
// isOOO 형태의 재사용 가능한 함수 정의, 반환타입을 명시할 때 매개변수의 이름과 같은 이름을 사용해서 함수가 true면 특정 값이라는 것을 알려줌
const isCat = (pet: Cat | Dog): pet is Cat => {
  return (pet as Cat).numLives !== undefined;
};
// isCat 함수가 true면 pet 은 Cat 타입이다!

const makeNoise = (pet: Cat | Dog): void => {
  if (isCat(pet)) {
    pet
    console.log("Meow");
  } else {
    pet
    console.log('Woof');
  }
};


// 판별 유니온(discriminated unions) : 공통적인 프로퍼티에 리터럴값을 부여해서 구분
// 소진검사(exhaustiveness check)와 Never : switch문의 default 값을 만들어서 새로운 코드를 작성하고 그에 대한 처리가 누락되었을 때 오류를 발생시키도록 만듦 -> never 는 반환값을 만들지 않기 때문
interface Rooster {
  kind: "rooster";
  name: string;
  weight: number;
  age: number;
};
interface Cow {
  kind: 'cow';
  name: string;
  weight: number;
  age: number;
};
interface Pig {
  kind: 'pig';
  name: string;
  weight: number;
  age: number;
};
// 추가코드
interface Sheep {
  kind: 'sheep';
  name: string;
  weight: number;
  age: number;
}

type FarmAnimal = Rooster | Cow | Pig | Sheep;

const getFarmAnimalSound = (animal: FarmAnimal) => {
  switch(animal.kind) {
    case "rooster":
      return "Cockadoodledoo!";
    case "cow":
      return "Moooooo!";
    case "pig":
      return "Oink!";
    case "sheep":
      return "Baaa!";
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
};

const stevie: Rooster = {
  kind: 'rooster',
  name: 'stevie',
  weight: 2,
  age: 1.5
};

getFarmAnimalSound(stevie);