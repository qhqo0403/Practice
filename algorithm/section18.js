// 단방향 연결 리스트 (Singly Linked List)
// 연결리스트는 노드들의 집합으로 데이터를 저장하는 모습이 배열과 비슷하지만 인덱스가 없음
// 인덱스가 없기 때문에 특정 위치의 데이터에 접근하려면 처음부터 거슬러올라가야함.
// 데이터들은 노드(node)라고 부르고 가장 첫 번째 노드가 헤드(head), 마지막 노드가 테일(tail). 중요성을 따지자면 테일보다는 헤드가 중요하다!
// 노드들은 각 노드에 연결된 다음 노드에 대한 정보도 가지고 있음 -> 데이터를 찾으려면 한 방향으로 거슬러 올라가게 됨. 만약 다음 노드가 없으면 null 출력
// 노드에는 어떤 형식의 데이터든 저장할 수 있음 -> 숫자, 문자, 배열 .....
// 배열이 엘리베이터라면 단방향 연결리스트는 계단이라고 할 수 있음! -> 배열은 인덱스를 통해 특정 요소에 바로 접근하지만 연결 리스트는 하나하나 올라가야함.

// 배열 vs 연결리스트
// 연결리스트에는 인덱스가 없기 때문에 요소로 임의 접근이 불가능함 -> 맨 처음부터 하나하나 살펴봐야함
// 새로운 요소를 처음이나 중간에 삽입하려고 하는 경우 배열은 인덱스의 재배치가 필요한 반면 연결리스트는 그럴 필요가 없음

class Node {
  constructor(val) { // 어떤 데이터던지 받아서 저장하는 생성자 함수
    this.val = val;
    this.next = null; // 다음 노드를 가리키는 포인터
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) { // 새로운 노드를 마지막에 추가하는 메서드
    let newNode = new Node(val);
    if (!this.head) { // 저장된 노드가 없다면(헤드가 없다면) 새로 저장되는 노드가 헤드이자 테일이 되도록
      this.head = newNode;
      this.tail = this.head;
    } else { // 헤드가 있다면 그 헤드의 다음 노드 포인터를 새로 추가되는 노드를 가리키고, 새로운 노드를 테일로 만들어줌
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // 전체 리스트의 길이
    return this;
  }

  pop() { // 마지막 노드를 삭제하는 메서드. 양방향 연결 리스트가 아니기 때문에 끝에서부터 접근할 수 없고 헤드부터 거슬러올라가야함
    if (!this.head) return undefined; // 노드가 하나도 없을 때 undefined 출력
    let current = this.head; // 헤드노드부터 시작
    let newTail = current; // 새로운 테일이 될 노드를 저장하는 변수
    while (current.next) { // 마지막 요소에 도달하게 되면 반복문 종료 -> 마지막 요소는 next가 null
      newTail = current; // newTail 은 항상 current 를 따라가게 됨
      current = current.next;
    } // tail에 도달하면 next가 없기 때문에 반복문이 종료되고 마지막 요소 하나 전(뒤에서 두번째 노드)이 newTail에 저장된 상태
    this.tail = newTail; // tail을 새로 지정해주고
    this.tail.next = null; // 이전에 있던 tail과의 연결을 지워주기
    this.length--; // 연결리스트 길이 감소
    if (this.length === 0) { // 노드가 다 삭제되었다면 -> 이 로직이 없으면 길이는 감소해도 head와 tail 이 같은 노드를 가리키는 상태로 남아있게 됨
      this.head = null;
      this.tail = null;
    }
    return current; // 지우려는 요소를 반환
  }

  shift() { // 첫 번째 요소 제거하는 메서드
    if (!this.head) return undefined;
    let currentHead = this.head; // 현재의 헤드노드를 저장
    this.head = currentHead.next; // 현재의 헤드노드의 다음 노드를 리스트의 헤드로 변경
    this.length--; // 길이를 감소시키고
    if (this.length === 0) { // 길이가 0 이 되었을 때 tail을 null 로 -> head 는 길이가 줄어들면서 next를 통해 null 이 됨
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) { // 노드를 맨 앞에 추가하는 메서드
    let newNode = new Node(val); // 새로운 노드 생성
    if (!this.head) { // 헤드노드가 없다면 헤드와 테일이 같은 노드를 가리키게 됨
      this.head = newNode;
      this.tail = this.head;
    } else { // 헤드노드가 이미 있다면 새로운 노드의 포인터를 현재 헤드로 만들어주고 리스트의 헤드를 업데이트 -> else로 감싸지 않으면 새로운 헤드노드의 next가 무한대로 생성됨
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++; // 길이 증가
    return this;
  }
}