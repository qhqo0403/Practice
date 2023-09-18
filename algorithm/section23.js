// 이진 힙 (Binary Heaps) : 트리의 한 종류. 이진 탐색 트리와 비슷한 구조
// 이진 힙의 규칙은 이진 탐색 트리처럼 최대 두 개의 자식 노드를 가질 수 있고 부모 노드가 자식 노드보다 항상 크거나 작다는 것
// 이진 탐색 트리와 비슷하지만 왼쪽(작은 값), 오른쪽(큰 값)의 순서가 없음.
// 최대 이진힙은 부모노드가 자식노드보다 항상 큰 값을 가지는 구조, 최소 이진힙은 부모노드가 자식노드보다 항상 작은 값을 가지는 구조
// 자식노드는 부모노드보다 크거나 작은 값을 가지고, 형제 노드들끼리는 그런 비교의 순서가 없음
// 이진 힙은 항상 최적의 용량을 차지함 -> 노드가 한쪽으로 치우지지 않고 왼쪽 자식부터 고르게 채워짐

// 배열 안에서 부모의 인덱스를 기준으로 2n + 1 하면 왼쪽 자식 노드, 2n + 2 하면 오른쪽 자식노드
// 반대로 자식노드의 인덱스를 기준으로 (n - 1) / 2 를 내림하면 부모노드의 위치를 알 수 있음
// 데이터를 배열 내에 저장하고 위의 식들을 가지고 구조를 만듦
// 부모보다 큰 값이 추가될 경우에는 부모와 자리를 교환하게 됨 -> 버블 업

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  };

  insert(element) { // 데이터를 추가하는 메서드
    this.values.push(element); // 배열의 마지막에 데이터 추가한 후
    this.bubbleUp(); // 부모와의 비교를 통해서 자리를 바꿔줄 메서드 호출
  };

  bubbleUp() { // 부모보다 자식의 값이 크다면 부모와 자식의 자리를 바꿔주는 메서드
    let idx = this.values.length - 1; // 데이터를 배열의 마지막에 추가하니까 마지막 인덱스를 저장
    const element = this.values[idx]; // 새로 추가된 데이터
    while (idx > 0) { // idx 에 대한 제한사항이 없다면 음수 인덱스까지 비교를 하게 되기때문에 0보다 클 때만 반복문 실행
      let parentIdx = Math.floor((idx - 1) / 2); // 부모 노드의 위치(인덱스)를 구함
      let parent = this.values[parentIdx]; // 부모 노드 저장
      if (element <= parent) break; // 새로 추가된 element 가 부모 노드의 값보다 작을 경우 반복문 종료
      this.values[parentIdx] = element; // element 가 부모보다 클 경우 부모 노드의 자리에 element를 넣어주고
      this.values[idx] = parent; // element가 추가된 자리와 부모 노드를 교환
      idx = parentIdx; // 자리가 바뀌고 나서도 부모 노드의 위치를 구해서 비교해야 하기 때문에 이전 부모의 인덱스를 idx 에 할당
    };
  };

  extractMax() { // 최댓값을 제거하는 메서드 (min binary heap 에서는 최솟값). 최댓값을 제거하고 배열 내의 마지막 값을 배열의 첫번째 자리로 옮긴 후, 자식들과의 값 비교를 통해 제자리를 찾아감
    const max = this.values[0]; // 최대 이진힙에서는 루트의 값이 가장 크기 때문에 배열의 맨 첫번째 값을 변수로 저장
    const end = this.values.pop(); // pop을 통해 추출한 마지막 요소를 변수로 저장
    if (this.values.length > 0) { // 배열의 요소가 1개 남았을 때에는 요소를 저장하고 다시 삽입하는 과정이 반복되기 때문에 빈 배열이 되었을 경우에는 실행하지 않도록함
      this.values[0] = end; // 배열의 첫 번째 자리에 마지막 요소 덮어쓰기
      this.sinkDown(); // 제자리를 찾아가도록 메서드 실행
    }
    return max;
  };

  sinkDown() { // 이동된 노드가 자식 노드들과의 비교를 통해 알맞은 자리로 찾아가는 메서드! 자식들의 값을 비교해서 더 큰 값과 교환함
    const length = this.values.length;
    const element = this.values[0]; // 마지막에서 맨 앞으로 이동된 요소(노드)
    let idx = 0; // 현재의 인덱스를 저장
    while (true) {
      let leftChildIdx = (idx * 2) + 1; // 왼쪽 자식노드
      let rightChildIdx = (idx * 2) + 2; // 오른쪽 자식노드
      let leftChild, rightChild; // 선언만 하는 이유는 인덱스가 배열의 길이보다 클 경우 undefined 가 출력되기 때문
      let swapIdx = null; // 비교를 통해 변경될 인덱스를 저장하는 변수

      if (leftChildIdx < length) { // 왼쪽 자식의 인덱스가 유효하다면
        leftChild = this.values[leftChildIdx]; // 변수에 할당하고
        if (leftChild > element) { // 왼쪽 자식이 element 보다 값이 크다면
          swapIdx = leftChildIdx; // 왼쪽 자식의 인덱스를 저장
        };
      };

      if (rightChildIdx < length) { // 오른쪽 자식의 인덱스가 유효하다면
        rightChild = this.values[rightChildIdx]; // 변수에 할당
        if ((swapIdx === null && rightChild > element) || (swapIdx !== null && rightChild > leftChild)) {
          // 첫 번째 조건 : swapIdx가 null(왼쪽 자식이 element 보다 작고)이고 오른쪽 자식이 element 보다 크다면
          // 두 번째 조건 : swapIdx가 null이 아니고(왼쪽 자식이 element보다 클 경우) 오른쪽 자식이 왼쪽 자식보다 클 경우
          swapIdx = rightChildIdx; // 오른쪽 자식의 인덱스를 저장
        };
      };

      if (swapIdx === null) break; // element의 값이 클 경우 swapIdx에 다른 값이 할당되지 않으면서 반복문이 종료

      this.values[idx] = this.values[swapIdx]; // element와 자식 요소 교환
      this.values[swapIdx] = element;
      idx = swapIdx; // 교환한 자리의 인덱스를 idx 에 저장 -> 계속 자식 노드와 비교해야하기 때문!
    };
  };
};