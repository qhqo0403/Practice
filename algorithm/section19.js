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
  }
};