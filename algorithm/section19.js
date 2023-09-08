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
};