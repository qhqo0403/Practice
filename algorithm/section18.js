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
    };
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
    }; // tail에 도달하면 next가 없기 때문에 반복문이 종료되고 마지막 요소 하나 전(뒤에서 두번째 노드)이 newTail에 저장된 상태
    this.tail = newTail; // tail을 새로 지정해주고
    this.tail.next = null; // 이전에 있던 tail과의 연결을 지워주기
    this.length--; // 연결리스트 길이 감소
    if (this.length === 0) { // 노드가 다 삭제되었다면 -> 이 로직이 없으면 길이는 감소해도 head와 tail 이 같은 노드를 가리키는 상태로 남아있게 됨
      this.head = null;
      this.tail = null;
    };
    return current; // 지우려는 요소를 반환
  }

  shift() { // 첫 번째 요소 제거하는 메서드
    if (!this.head) return undefined;
    let currentHead = this.head; // 현재의 헤드노드를 저장
    this.head = currentHead.next; // 현재의 헤드노드의 다음 노드를 리스트의 헤드로 변경
    this.length--; // 길이를 감소시키고
    if (this.length === 0) { // 길이가 0 이 되었을 때 tail을 null 로 -> head 는 길이가 줄어들면서 next를 통해 null 이 됨
      this.tail = null;
    };
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
    };
    this.length++; // 길이 증가
    return this;
  }

  get(index) { // 인덱스가 있는것처럼 n번째 노드에 접근하도록 해주는 메서드
    if (index < 0 || index >= this.length) return null; // index 가 음수거나 리스트의 길이보다 길 경우 null 반환, 
    let current = this.head; // 첫번째 노드부터 시작
    let counter = 0; // index 역할을 할 count 변수
    while (counter !== index) { // counter 변수와 index가 다를 경우에만 실행 (같아질 경우 반복문 종료)
      current = current.next; // 다음 노드로 이동, 이동이 먼저 일어나고 카운터 함수가 증가하기 때문에 반복문이 종료된 시점에 해당 위치에 있는 노드를 저장할 수 있음.
      counter++; // 카운터가 1씩 증가
    };
    return current;
  }

  set(index, val) { // 특정 인덱스에 위치한 노드를 업데이트 하는 메서드
    let currentNode = this.get(index); // get메서드를 이용해서 해당 인덱스의 노드를 변수에 저장
    if (currentNode) { // 노드가 존재한다면
      currentNode.val = val; // 노드의 값을 새로운 값으로 변경시켜주고
      return true;
    };
    return false; // 인덱스가 음수거나 리스트의 길이보다 클 경우 false 반환
  }

  insert(index, val) { // 특정 인덱스 자리에 새로는 노드를 삽입하는 메서드
    if (index < 0 || index > this.length) return false; // 인덱스의 유효성 검증. 인덱스와 길이가 같을 때가 유효한 이유는 마지막 인덱스에 새로운 노드를 삽입할 경우
    if (index === this.length) { // 맨 마지막에 추가하는 경우에는 push 메서드 실행
      this.push(val);
      return true;
    };
    if (index === 0) { // 처음에 추가하는 경우 unshift 메서드 실행
      this.unshift(val);
      return true;
    };
    // if (index === this.length) return !!this.push(val); -> ! 는 값이 불리언으로 출력되는것을 강제함. ! 하나면 false
    // if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val); // 새로운 노드 생성
    let prev = this.get(index - 1); // get 메서드를 이용하여 새로운 메서드가 들어갈 인덱스 바로 앞 노드를 변수로 저장
    let temp = prev.next; // prev.next를 임시변수로 저장하지 않고 바로 새로운 노드로 할당하면 기존에 있던 노드가 사라지게 되기 때문에 임시변수로 저장
    prev.next = newNode; // 새로운 next 할당
    newNode.next = temp; // 새로운 노드와 인덱스 위치에 있던 노드를 연결
    this.length++;
    return true;
  }

  remove(index) { // 특정 인덱스의 노드를 제거하는 메서드
    if (index < 0 || index >= this.length) return null; // 인덱스 유효성 검사
    if (index === this.length - 1) return this.pop(); // index가 마지막 노드를 가리키는 경우 pop 메서드 실행
    if (index === 0 ) return this.shift(); // index가 첫번째 노드를 가리키는 경우 shift 메서드 실행

    let prevNode = this.get(index - 1); // 제거할 인덱스의 위치한 노드 바로 이전 노드를 변수로 저장
    let removed = prevNode.next; // 제거할 노드를 변수로 저장하고
    prevNode.next = removed.next; // 제거할 노드의 next를 prevNode와 연결
    this.length--;
    return removed;
  }

  reverse() { // 노드의 순서를 반대로 바꿔주는 메서드
    let node = this.head; // 헤드 노드를 변수로 저장
    this.head = this.tail; // 헤드를 테일로 바꿔주고
    this.tail = node; // 테일을 헤드로 바꿈
    let next; // next는 없을 경우 null 로 설정되어 있기에 따로 할당을 하지 않아도 됨
    let prev = null; // 테일의 경우 넥스트가 null 이기 때문에 초기값 할당
    
    for (let i = 0; i < this.length; i++) { // 리스트의 길이만큼 반복하여 실행 -> 다른 메서드와 다르게 while를 쓰지 않는 이유는 길이를 계속 추적해야하기 때문
      next = node.next; // 현재 노드의 넥스트를 변수에 저장
      node.next = prev; // 현재 노드의 넥스트 방향을 이전 노드로 변경
      prev = node; // prev를 현재 노드로 바꿔주고
      node = next; // 현재 노드는 next가 됨
    }
    return this;
  }
}


// 단방향 연결 리스트의 빅오표기 : 노드의 삽입은 O(1), 삭제는 O(1) 또는 O(n), 검색과 접근은 O(n)
// 노드의 삽입은 배열과 비교했을 때 단방향 리스트의 경우 각 넥스트와 헤드, 테일의 재지정 정도가 소요되지만 배열의 경우에는 요소를 추가하고 다른 요소들의 인덱스까지 수정해야하기 때문에 단방향 연결 리스트가 데이터 삽입에 있어서는 유리하다
// 노드의 제거는 제거 대상이 어디에 위치해있느냐에 따라서 시간복잡도가 달라질수 있음 -> 첫 번째 노드를 제거하는 경우 O(1), 마지막 노드를 제거하는 경우 O(n)
// 노드를 특정 인덱스로 접근하거나 검색하는 경우에는 노드를 하나하나 다 살펴봐야하기 때문에 O(n)이 소요되고 이 부분에 대해선 인덱스로 요소를 접근할 때 O(1)이 소요되는 배열이 더 유리함!
