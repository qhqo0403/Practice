// 선택 정렬 (selection sort) : 버블 정렬과 비슷하지만 선택 정렬은 작은 값을 찾아서 정렬하는 방식
// 첫 번째 요소를 최솟값으로 놓고 배열의 모든 항목과 비교해서 더 작은 값을 찾아서 비교하는 방식. 더 작은 값들이 다음 항목과 비교할때의 최솟값이 되는 방식
// 두 항목을 비교에서 바로바로 교환하는 버블 정렬과 달리 배열 전체를 한 번 순회하고나서 교환이 이루어짐 -> 버블정렬은 두 항목을 비교할 때마다 교환, 전체(배열 순회 1번)를 비교하고나서 교환
// 버블정렬과 비슷한 점은 가장 작은 값(버블 정렬에서는 큰 값)을 찾아서 정렬한 후에는 비교할 항목의 수가 감소하는 것과 흔히 쓰이지 않는다는 점!
// 또한 버블정렬과 마찬가지로 반복문이 중첩되어 있기 때문에 O(n²)
// 선택정렬이 버블정렬보다 나은 점은 스왑하는 수가 적기 때문에(버블은 비교할때마다 스왑) 메모리나 스왑 수를 고려할 때에는 선택정렬이 더 나은 선택일수도 있다


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) { // i + 1 인 이유는 항상 i 와 그 다음 항목을 비교하기 때문 -> 항목 수도 감소함
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};

// 다른 버전
const sSort = arr => {
  const swap = (arr, idx1, idx2) => {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
};