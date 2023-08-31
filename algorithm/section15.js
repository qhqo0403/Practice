// 퀵 정렬 (quick sort) : 합병 정렬과 비슷하게 재귀방식이고, 기준점(분할된 배열 요소 중 하나, 피벗포인트라고 함!)을 하나 골라서 다른 요소들을 정렬하는 방식
// 배열이 주어지면 피벗 포인트를 지정해서 배열 요소를 재배치하는 방법, 모두 정렬이 될때까지 기준점을 골라서 요소를 이동시키는 작업이 반복됨. 재귀 + 선택정렬 + 비교할때는 버블
// 피벗포인트가 올바른 자리를 찾아가면 그 피벗 포인트보다 작은 값들을 정렬하기 위해서 새로운 피벗 포인트를 만듦. 그 다음 큰 값을 정렬하기 위한 피벗 포인트가 생기면서 이 과정이 반복
// 퀵 정렬의 실행시간은 피벗포인트의 위치에 따라 달라질 수 있음
// 새로운 배열을 만드는 것이 아니라 제자리에서 요소만 이동시키면서 정렬함

// 피벗포인트를 잡고 인덱스를 반환하는 함수
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]; // 첫 번째 요소를 피벗포인트로
  let swapIdx = start; // 요소들간 스왑해야하는 인덱스를 저장하는 변수

  function swap(arr, idx1, idx2) { // 요소 스왑
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  for (let i = start + 1; i <= end; i++) { // 피벗포인트와 그 다음 요소를 비교하기 위해서 start + 1
    if (pivot > arr[i]) { // 피벗 포인트보다 작은 값이 있다면 swapIdx 를 1씩 증가시킨 다음 그 위치에 있던 값과 스왑
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx); // 작은 값들의 이동이 끝나고 난 후 피벗 포인트 스왑
  return swapIdx; // 배열을 반환하는 것이 아니라 인덱스를 반환함
};

function quickSort(arr, left = 0, right = arr.length - 1){
  if (left < right) { // left 값과 right 값이 같다는건 하나의 요소가 되었다는 뜻이기 때문에 left가 right보다 작을 때에만 재귀함수가 반복해서 호출
    let pivotIdx = pivot(arr, left, right);
  
    quickSort(arr, left, pivotIdx - 1); // 피벗포인트를 기준으로 왼쪽 부분을 정렬하기 위해서 재귀함수 호출
    quickSort(arr, pivotIdx + 1, right); // 피벗포인트를 기준으로 오른쪽 부분 정렬
  }
  return arr;
};

// 퀵 정렬의 빅오표기 : 시간 복잡도는 평균, 최적의 상황에서는 O(n log n), 최악의 상황에서는 O(n²), 공간복잡도는 O(log n)
// 시간복잡도는 합병정렬과 마찬가지로 배열 요소를 분해하는 횟수가 log n 의 배수만큼 늘어나고 피벗 포인트를 지정하고 값을 비교하기위해 배열요소의 모든 값을 살피기 때문에 O(n), 최종적으로 O(n log n)
// 최악의 상황의 경우에는 정렬된 배열을 정렬하고자 할때 피벗포인트를 매번 최솟값(정렬된 경우 첫번째값이 최솟값이기때문에)을 고르게 되면 배열을 분해할 때도 O(n) 피벗포인트와 비교할때도 O(n)이기 때문에 최종적으로 O(n²)이 됨
// 최악의 상황을 피하기 위해서 피벗포인트를 무작위로 지정하거나 중간값을 지정하는 방법이 있음