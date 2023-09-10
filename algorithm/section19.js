// 이중 연결 리스트 (doubly linked list) : 단방향 연결 리스트와 같이 인덱스가 없는 노드들의 집합으로 이루어져 있고 노드들간의 양방향 이동이 가능함
// 단방향 연결 리스트보다 특정 노드를 찾거나 하는 등의 작업에서 더 유연하지만 노드들간의 연결이 양방향이기 때문에 메모리를 더 많이 차지함

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null; // 단방향 연결 리스트와 달리 이전 노드와 연결된 포인터가 있음
    this.next = null;
  };
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  push(val) {
    let newNode = new Node(val);
    if (!this.head) { // this.length === 0 으로 해도 됨! 헤드가 없거나 리스트의 길이가 0일 때
      this.head = newNode;
      this.tail = this.head;
    } else { // 이미 노드가 있을 때
      this.tail.next = newNode; // 테일의 넥스트 포인터를 연결하고
      newNode.prev = this.tail; // 새로운 노드의 prev 를 테일과 연결
      this.tail = newNode; // 테일에 새로운 노드를 할당
    }
    this.length++;
    return this;
  };

  pop() { // 단일연결리스트와 다르게 prev 와 next 모두 끊어줘야함
    if (!this.head) return undefined;
    let poped = this.tail; // 제거될 노드를 변수로 저장
    if (this.length === 1) { // 마지막 노드일 경우
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poped.prev;
      this.tail.next = null;
      poped.prev = null;
    };
    this.length--;
    return poped;
  };

  shift() { // 맨 앞에서 노드를 삭제하는 것은 포인터를 하나 더 삭제한다는 것 빼고는 단방향 리스트와 완전 같음!
    if (!this.head) return undefined;
    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    };
    this.length--;
    return shifted;
  };

  unshift(val) { // shift와 마찬가지로 단방향 리스트와 거의 유사
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++;
    return this;
  };

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current;
    if (index <= Math.floor(this.length / 2)) { // 인덱스가 리스트의 중간지점 보다 작거나 같을 경우 헤드부터 탐색 시작
      count = 0;
      current = this.head;
      while (index !== count) {
        current = current.next;
        count++;
      };
    } else { // 인덱스가 리스트의 중간지점보다 클 경우 테일부터 탐색 시작
      count = this.length - 1;
      current = this.tail;
      while (index !== count) {
        current = current.prev;
        count--;
      };
    };
    return current;
  };

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    };
    if (index === this.length) {
      this.push(val);
      return true;
    };

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;
    this.length++;
    return true;
  };

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next; // insert에서 before, after 변수를 따로 만들었던 것처럼 해도 됨
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  };

  reverse() { // 연습삼아 만듦. 단방향 리스트와 다르게 테일부터 거꾸로 올라가는게 가능해짐! 테일이 헤드가 되는 방향
    let node = this.tail;
    this.tail = this.head;
    this.head = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.prev;
      node.prev = prev;
      node.next = next;
      prev = node;
      node = next;
    }
    return this;
  }
};

// 양방향 연결 리스트의 빅오표기 : 노드의 삽입은 O(1), 삭제는 O(1), 검색과 접근은 O(n)
// 탐색의 경우 양방향 이동이 가능하기 때문에 n / 2 로도 볼수는 있지만 결국에는 O(n)이 됨