// 정렬 알고리즘(sorting algorithms) : 데이터를 특정 기준에 따라 정렬시킴
// https://www.toptal.com/developers/sorting-algorithms -> 정렬 알고리즘별로 상황에 따른 소요시간 비교


// 자바스크립트 내장 정렬 메서드 arr.sort() 는 유니코드에 따라서 정렬을 시도하기 때문에 문자열은 알파벳 순서로 정렬이 되겠지만 숫자의 경우 정렬 순서에 어긋남
// 그렇기 때문에 인자로 함수를 받아서 정렬 기준을 명시하는 방식임!
function basicSorting(a, b) {
   return a - b // 오름차순! b - a 면 내림차순
};
// 응용해서 문자열 길이를 기준으로도 정렬할 수 있음
function strLen(str1, str2) {
  return str1.length - str2.length; // 짧은 문자열부터 정렬됨
}


// 버블정렬(bubble sort) : 배열의 항목을 하나씩 살피면서 큰 숫자가 한 칸씩 뒤로가는 방식
// 왼쪽 항목을 오른쪽 항목과 비교해서 더 큰 항목을 교환하고 다음 항목과 비교해서 더 크면 교환하고 ... 를 반복 (왼쪽 항목이 오른쪽 항목보다 크면 교환X)
// 제일 큰 숫자가 마지막 항목이 되는 과정을 반복함
// 비교를 한번씩 실행하고 한바퀴 다 돌면 항목의 수가 감소함
// 많이 사용하는 편은 아님
// 버블정렬은 기본적으로 반복문이 중첩되어 있기 때문에 O(n²)임. 거의 정렬된 배열에 불리언으로 반복문을 제한하면 최적의 경우에는 O(n) 까지 갈수도 있긴 함.

// 교환 방법
function swapV1(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
const swapV2 = (arr, idx1, idx2) => {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// 예시
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) { // 끝부터 시작하는 이유는 항목수가 감소하기 때문! 처음부터 시작하면 불필요한 과정이 매번 반복됨w
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const bSort = arr => {
  const swap = (arr, idx1, idx2) => {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// 데이터가 거의 정렬이 되어있는 배열에 버블 정렬을 사용하면 효율성이 매우 떨어짐 -> 정렬이 다 되었음에도 반복문이 계속 실행되기 때문
function bubbleSortOptimize(arr) {
  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; i++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break; // 불리언 변수를 만들어서 교환이 일어나지 않고 외부 반목문의 다음단계로 넘어가는 경우 반복문을 종료시킴
  }
  return arr;
}