// 트리 순회 (Tree traversal) : 어떤 종류에 트리에서던지 사용할 수 있는 순회 방법
// 너비 우선 (Breadth-First Search : BFS), 깊이 우선(Depth-First Search : DFS) -> 순회 방향에 따라서
// BFS는 트리의 수평방향, DFS 트리의 수직방향
// DFS 에는 중위순위(InOrder), 전위순위(PreOrder), 후위순위(PostOrder)


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

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    };
    let current = this.root;
    while(true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        };
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        };
        current = current.right;
      };
    };
  };

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      };
    };
    if (!found) return undefined;
    return current;
  };

  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      };
    };
    return false;
  };

  BFS() { // Breadth-First Search
    let node = this.root;
    let queue = []; // 선입선출(큐)를 이용하여 노드가 담겼다가 data 배열로 push. 순회할 노드들을 추적하는 배열
    let data = []; // 순회한 노드들이 담기는 배열
    queue.push(node);

    while (queue.length) { // queue 배열에 노드가 있을 경우 계속 실행
      node = queue.shift(); // 들어온 순서대로 맨 앞에서부터 노드를 빼내서 변수에 저장.
      data.push(node.val); // 데이터 변수에 차례로 담아주고
      if (node.left) queue.push(node.left); // 현재 노드의 왼쪽 값이 있다면 queue에 push
      if (node.right) queue.push(node.right); // 현재 노드의 오른쪽 값이 있다면 queue에 push, 왼쪽 값과 오른쪽 값을 배열에 담는 것이 수평 방향임!
    };
    return data;
  };

  DFSPreOrder() { // Depth-First Search 중 전위순위(PreOrder). 루트에서부터 아래로 내려가면서 왼쪽에 있는 모든 노드를 살핀 후 오른쪽의 있는 노드를 순회하는 방식
    let data = []; // 순회한 노드들이 담길 배열
    let current = this.root; // 굳이 변수로 지정하지 않고 traverse 함수에 this.root를 바로 넣어도 되지만, 트리의 크기가 커서 특정 지점에서 시작하는 경우 변수를 지정해서 시작점을 잡아줄 수 있음
    function traverse(node) { // 재귀함수
      data.push(node);
      if (node.left) traverse(node.left); // 현재 노드의 왼쪽에 노드가 있다면 그 노드에 대해서 traverse를 호출 -> 호출되면서 data.push(node)에 의해 현재 순회하고 있는 노드를 배열에 push
      if (node.right) traverse(node.right); // 현재 노드의 오른쪽에 노드가 있다면 그 노드에 대해서 traverse를 호출
    };
    traverse(current);
    return data;
  };

  DFSPostOrder() { // Depth-First Search 중 후위순위(PostOrder). 맨 왼쪽 아래에 있는 자식 노드까지 순회하고 나서 배열에 추가하는 방식.
    let data = [];
    function traverse(node) { // 노드를 순회하고 나서 배열에 추가
      if (node.left) traverse(node.left); // 왼쪽에서 제일 아래에 있는 자식 노드를 찾을 때까지 traverse를 실행
      if (node.right) traverse(node.right); // 왼쪽에서 제일 아래에 있는 자식 노드를 찾을 때까지 traverse를 실행
      data.push(node); // 맨 아래에 있는 자식노드를 찾았으면 data 배열로 push. 루트는 제일 마지막에 추가되게 됨!
    };
    traverse(this.root);
    return data;
  };

  DFSInOrder() { // Depth-First Search 중 중위순위(InOrder). 왼쪽에 있는 모든 노드들을 순회하고 나서 배열에 추가한 후 오른쪽에 대하여 순회하는 방식
    let data = [];
    function traverse(node) { // 노드를 순회하고 나서 배열에 추가
      if (node.left) traverse(node.left); // 왼쪽에서 제일 아래에 있는 자식 노드를 찾을 때까지 traverse를 실행
      data.push(node); // 왼쪽에 있는 노드들을 다 순회하고 배열에 추가함. 왼쪽 노드를 다 순회하고 루트 추가, 그 다음 오른쪽 실행
      if (node.right) traverse(node.right); // 왼쪽에서 제일 아래에 있는 자식 노드를 찾을 때까지 traverse를 실행
    };
    traverse(this.root);
    return data;
  };
};


// BFS 와 DFS 모두 모든 노드를 순회하기 때문에 시간복잡도는 같음. 
// 트리의 형태가 너비가 넓을 때 BFS를 사용하면 큐에 저장되는 값들이 많기 때문에 공간복잡도가 상승하게 됨. -> 너비가 넓을 때에는 DFS가 더 적합
// 트리의 형태가 깊이가 길 때 DFS를 사용한다면 호출해야하는 재귀의 스택이 더 많이 쌓이게 됨 -> 깊이가 깊을때에는 BFS가 더 적합!
// DFS에서 중위순위의 경우 이진 탐색 트리에서 사용할 경우 데이터를 오름차순으로 정렬할 수 있음!
// DFS에서 전위순위의 경우 데이터를 저장했다가 다시 트리를 재구성할 때 사용할 수 있음!
// 무엇이 좋다 안좋다 보다는 때에따라 써야하는 상황이 다름!