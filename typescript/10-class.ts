// typescript class

// 생성자 함수를 통해서 클래스의 필드 속성을 초기화하려면 미리 타입을 선언해야함
// 클래스 내에서 필드속성을 readonly로 지정하면 값의 변경 불가 (생성자 함수에서 초기화만 가능)
class Player {
  readonly first: string;
  readonly last: string;
  private _score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  };
  // 외부에서 접근할 수 없고 클래스 내부에서만 사용 가능
  private secret(): void {
    console.log("SECRET!")
  };
  // 클래스 내의 프라이빗 속성을 외부에서 볼수만 있게 해줌. 반환값이 있어야함
  get score(): number {
    return this._score;
  }
  // 특정 조건을 충족할 경우에만 프라이빗 속성을 변경할 수 있도록 해주는 setter. 반환값 설정할 수 없음
  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score cannot be nagative!');
    }
    this._score = newScore;
  }
};


// public & private & protected
// public은 클래스 외부에서도 값에 접근하고 수정할 수 있는 값을 표시함(기본값!).
// private은 클래스 내부에서만 값에 접근하고 사용할 수 있음. 자바스크립트에서처럼 해시태그(#) 사용해도 됨!
// protected 는 프라이빗 속성이 정의된 클래스와 그 클래스를 상속받은 클래스 내부에서 프라이빗 속성에 접근할 수 있도록 해줌
// 클래스 내부와 외부 관계없이 접근하고 사용하려면 public, 하나의 클래스 내부에서만 사용하려면 private, 클래스와 상속받는 클래스 내부에서만 접근하고 사용하려면 protected

const newPlayer = new Player('chris', "Hemsworth");
/*
newPlayer.secret();
newPlayer.#secret();
 */


// 파라미터 프로퍼티 : 프로퍼티 초기화 단축구문
class PlayerOne {
  scroe: number = 0;
  constructor(public first: string, public last: string) {}
};
// 인스턴스화 될 때 인자를 전달받으면 특정 파라미터가 특정 타입으로 초기화됨.


// interface와 class, implements
interface Colorful {
  color: string;
}
interface Printable {
  print(): void;
}

class Bike implements Colorful {
  // color: string = 'red';
  constructor(public color: string) {}
};
class Jacket implements Colorful, Printable {
  constructor(public color: string, public brand: string) {};
  print(): void {
    console.log(`${this.color} ${this.brand} Jacket`);
  };
};
// Colorful의 형식을 공통으로 따르는 예, 쉼표를 사용해서 두 개 이상의 인터페이스를 연결할 수 있지만 너무 많아질 경우에는 통합하는 인터페이스를 하나 만들고 통합한 인터페이스를 적용하는 방식이 좋음


// abstract class : abstract로 선언된 클래스는 인스턴스화 할 수 없음 -> 상속받는 자식 클래스에서 반드시 존재해야하는 메서드를 정의할 때 (기능과 데이터, 규칙을 상속)
// 인터페이스와 비슷해보이지만 인터페이스는 객체의 형태만 나타내는 것이고 abstract은 클래스의 기능과 데이터를 가지고 있고 다른 메서드도 정의할 수 있음!
abstract class Employee {
  constructor(public first: string, public last: string) {};
  // 메서드의 내용을 정의하지는 않고 자식 클래스에 숫자(예시)를 반환하는 메서드가 있어야함
  abstract getPay(): number;
  // 일반 메서드(자식 클래스에서도 이용할수 있게됨!)
  greet(): void {
    console.log(`Hello, ${this.first} ${this.last}`);
  };
};
class FullTimeEmployee extends Employee {
  constructor(public first: string, public last: string, private salary: number) {
    super(first, last);
  };
  getPay(): number {
    return this.salary;
  }
};
class PartTimeEmployee extends Employee {
  constructor(public first: string, public last: string, private hourlyRate: number, private hourlyWork: number) {
    super(first, last);
  };
  getPay(): number {
    return this.hourlyRate * this.hourlyWork;
  };
};

const betty = new FullTimeEmployee('Betty', 'White', 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee('Bill', "Billerson", 24, 1100);
console.log(bill.getPay());




//getter로 속성을 만들면 읽기 전용 값임 -> 변경되도록 만들려면 setter도 같이 만들어줘야함