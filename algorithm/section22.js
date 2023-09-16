// 트리 순회 (Tree treversal) : 어떤 종류에 트리에서던지 사용할 수 있는 순회 방법
// 너비 우선 (Breadth-First Search : BFS), 깊이 우선(Depth-First Search : DFS) -> 순회 방향에 따라서
// BFS는 트리의 수평방향, DFS 트리의 수직방향
// DFS 에는 정위순위(InOrder), 전위순위(PreOrder), 후위순위(PostOrder)


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
    let queue = [];
    let data = [];
  }

};