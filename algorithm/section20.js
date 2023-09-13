// 스택 (Stack) : 후입선출을 원칙으로 하는 데이터들의 모임
// 가장 나중에 들어온 데이터가 가장 먼저 사용되는 방식
// 재귀함수(함수의 콜스택), 인터넷 방문기록, 실행취소 등을 예로 들 수 있음
// 배열에서 push - pop , unshift - shift 로 스택처럼 사용할 수 있음. unshift - shift 를 사용하면 요소들의 인덱스를 재배정해야하기 때문에 효율성이 좀 떨어짐!
// 배열에서 사용하자면 push - pop 이 더 나은 선택이고, 인덱스를 기반으로 데이터에 접근할 필요가 없다면 연결 리스트를 사용하는 것이 좋음.
// 단일 연결 리스트에서 push와 pop 은 테일까지 올라가서 삭제했기 때문에 시간 복잡도의 효율이 떨어짐 -> 상수시간을 갖는 unshift 와 shift 를 이용해서 만들 수 있음

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  };

  push(val) { // 첫 번째 데이터가 계속 뒤로 밀리는 방식으로 데이터를 저장
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.frist.next = temp; // newNode.next = temp;
    };
    return ++this.size;
  };

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) { // first 는 next 를 통해서 null 을 받을 수 있지만 last 는 지정해주지 않는 이상 노드가 계속 남아있게 됨
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  };
};

// 스택의 빅오표기 : 노드의 삽입과 제거는 O(1), 검색과 접근은 O(n)
// 스택에서 가장 중요한 것은 후입선출이기 때문에 데이터가 앞에서 추가되든 뒤에서 추가되든 상관이 없음 -> 그래서 단일 연결리스트의 unshift와 shift 를 push와 pop으로 사용하는 것
// 스택에서 데이터를 검색하거나 접근하는 경우가 빈번하다면 차라리 다른 자료구조를 사용하는 것이 나음!
// 데이터의 양이 적다면 배열을 사용하는 것도 대안이 되겠지만 데이터가 커지는 경우에 push와 pop만 사용할 것이라면 연결리스트를 이용하는 것이 효율적.


// 큐 (Queue) : 선입선출을 원칙으로 하는 데이터들의 모임
// 가장 먼저 들어온 데이터가 가장 먼저 사용되는 방식
// 줄을 서거나 프린트에서 인쇄를 할 때, 파일의 업로드와 다운로드 등을 예로 들수 있음
// 배열에서 push - shift , unshift - pop 으로 큐처럼 사용할 수 있음. -> 요소의 순환이 한번 발생하게 됨
// 맨 앞에 데이터를 추가하고 마지막 데이터를 삭제(pop)하려면 시간이 더 소요되기 때문에 맨 뒤에 추가하고 맨 앞에서 삭제하는 것이 좀 더 효율적이다

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  };

  enqueue(val) { // 데이터를 맨 뒤에 추가 -> 연결리스트에서의 push 이용
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  };

  dequeue() { // 맨 앞에서 데이터 삭제 -> 연결리스트에서의 shift 이용
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    };
    this.first = this.first.next;
    this.size--;
    return temp.val;
  };
};

// 큐의 빅오표기 : 노드의 삽입과 제거는 O(1), 검색과 접근은 O(n) -> 스택과 같음


// 스택과 큐는 추가와 제거에만 집중하는 경우로 검색과 접근을 사용하게 될 경우 다른 데이터 구조를 사용하는 것이 더 나음
// 스택이 쌓여있는 책이라면 큐는 인쇄대기열!