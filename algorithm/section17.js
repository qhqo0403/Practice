// 자료구조 : 값들을 저장하는 방식. 데이터와 기능의 관계, 데이터들을 저장하고 작동하는 특정한 메서드와 방식들이 있음
// 데이터를 다루는데에 있어 배열과 객체를 이용하는것을 넘어 더 복잡한 데이터의 관계를 표현하고 다루고 저장하기 위해서는 자료구조를 이해할 필요가 있음
// 자료구조는 특정 상황에 특화된 구조들이 있음 -> 특정한 것이 더 좋다 라고 말할 수 없다


// 자바스크립트 class 문법 복습 -> 자료구조를 class로 정의

// 클래스란 사전의 정의된 속성 및 메서드를 이용해 객체를 만들기 위한 청사진
class Student {
  constructor(firstName, lastName) { // 생성자 함수
    this.firstName = firstName; // 생성자 함수의 속성(프로퍼티)는 객체가 인스턴스화 될 때 객체의 속성으로 
    this.lastName = lastName;
    this.absence = 0;
    this.scores = [];
  }
  
  FullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  markLate() {
    this.absence++;
    if (this.absence >= 3) {
      return "You are expelled!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.absence} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return Math.floor(sum / this.scores.length);
  }
}

const firstStudent = new Student('Chris', 'Hemsworth'); // 클래스를 만들었다고 객체가 생성되는 것은 아니기 때문에 new 키워드를 통해서 클래스를 호출하면 객체가 생성됨
// new 키워드를 통해 클래스를 호출하면 클래스에 정의된 생성자 함수가 동작함
// 메서드 앞에 static을 쓰면 개별 인스턴스에서는 생성되지 않고 class를 통해서만 호출할수 있는 메서드를 정의할 수 있고, 개별 인스턴스에서는 호출할 수 없음 ex) Student.~~~~() 
// getter 와 setter 는 메서드처럼 정의하지만 속성임!
// setter 는 특정 프로퍼티의 값을 바꿀 때 조건을 추가할 수 있도록 함
// 보통 getter 와 setter 의 이름은 같은 이름을 사용함. getter와 setter를 통해서 특정 조건에 부합한다면 속성값이나 프라이빗 값에 접근하도록 만들 수 있음.