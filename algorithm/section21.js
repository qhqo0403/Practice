// 트리 (Trees) : 연결 리스트와 같이 노드로 이루어져있고, 노드들간의 부모-자식 관계가 있음.
// 노드는 0개 또는 1개 또는 그 이상의 노드와 연결될 수 있음
// 연결 리스트는 선형구조, 트리는 비선형 구조
// 가장 최상위의 노드를 루트(root)라고 부르고 하나의 트리에는 하나의 루트만 존재하고, 자식들은 루트로부터 멀어지는 방향으로 저장
// 부모 노드들은 형제노드(같은 부모를 가진 노드)를 가리킬 수 없음. 
// 자식이 없는 마지막 노드를 리프(leaf)라고 함. 그러니까 마지막 자식이자 리프!
// HTML DOM Tree, 네트워크 라우팅, JSON 데이터, 컴퓨터의 폴더구조, 인공지능 등 트리는 많이 사용되는 구조!

// 이진 트리 (Binary tree) : 노드가 최대 2개의 자식 노드를 가져야 함
// 이진 트리는 트리의 특정한 형태이고, 이진 검색 트리는 이진 트리의 특정한 형태

// 이진 검색 트리 (Binary search tree) : 노드의 데이터를 특정한 순서대로 저장함. 노드들을 비교하여 정렬할 기준이 필요
// 부모 노드의 왼쪽에 있는 자식노드는 항상 부모노드 보다 작고 오른쪽에 있는 자식노드는 부모노드보다 큼

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  insert(val) { // 새로운 노드를 추가하는 메서드
    let newNode = new Node(val);
    if (!this.root) { // 루트가 비어있다면
      this.root = newNode; // 새 노드를 루트로 할당
      return this;
    };
    let current = this.root; // 루트가 있을 경우 루트에서부터 탐색 시작
    while(true) { // 반복문 내부에서 조건에 맞으면 실행한 후 return 하기 때문에 값을 찾을 때까지 계속 반복문을 실행하도록 실행 조건을 true로 설정
      if (val === current.val) return undefined; // 같은 값을 입력받았을 경우 undefined 출력. 다른 방법으로는 같은 방법이 들어왔을 때 카운터 해주는 변수를 추가해서 표시할수도 있음
      if (val < current.val) { // 새로 추가하는 값이 current 의 값보다 작을 경우 current의 left 방향을 탐색. 
        if (!current.left) { // left 가 비어있다면
          current.left = newNode;  // 바로 할당
          return this;
        };
        current = current.left; // 비어있는 left를 찾을 때까지 current.left 를 탐색
      } else { // 새로 추가하는 값이 current 보다 클 경우 current 의 right 방향을 탐색
        if (!current.right) { // 비어있다면
          current.right = newNode; // right 에 바로 할당
          return this;
        };
        current = current.right; // 이미 값이 있을 경우 비어있는 자리를 찾을 때까지 오른쪽으로 내려감
      };
    };
  };

  find(val) { // 노드를 찾는 메서드
    if (!this.root) return false; // 트리가 비어있다면 false 출력
    let current = this.root; // 루트부터 시작
    let found = false; // 찾고자하는 노드를 찾았을 때 반복문을 종료시킬수 있도록 불리언 변수 선언
    while (current && !found) {
      if (val < current.val) { // 찾고자 하는 값이 current보다 작을 때
        current = current.left;
      } else if (val > current.val) { // 찾고자 하는 값이 current보다 클 때
        current = current.right;
      } else { // 값을 찾았다면 found 를 true로 바꾸면서 반복문 종료
        found = true;
      };
    };
    if (!found) return undefined; // 찾고자하는 값이 없을 때 undefined
    return current;
  };
};