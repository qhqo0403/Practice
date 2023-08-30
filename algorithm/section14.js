// 합병 정렬 (merge sort) : 배열을 작은 단위로 분할한 다음 다시 병합하여 정렬하는 방법
// 배열을 0개 또는 1개의 요소까지 분할한 다음에 정렬시키면서 병합함. 요소의 수가 작을수록 정렬하기 쉽고 요소가 1개라면 이미 정렬된 상태라고 볼 수 있음

// 두 개의 정렬된 배열을 병합 -> 투 포인터 방식
function merge(arr1, arr2) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) { // 두 배열 중 하나가 끝 값에 도달할 경우 반복문 종료
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // 위의 반복문이 종료되고 남은 요소에 대한 처리 -> 둘 중 남은 요소에 대해서만 처리가 됨
  while (i < arr1.length) { // 첫 번째 배열
    result.push(arr1[i]);
    i++;
  };
  while (j < arr2.length) { // 두 번째 배열
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// 배열을 작은 단위로 분할하고 다시 병합 -> 배열을 작은단위로 분할하기 위해 재귀방식 사용
function mergeSort(arr) {
  if (arr.length === 1) { // 배열 요소가 1개가 되면 재귀함수를 종료하고 1개의 요소가 담긴 배열을 반환
    return arr;
  }
  let mid = Math.floor(arr.length / 2); // 중간 지점 구하기
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// 합병 정렬의 빅오표기 : 시간복잡도는 평균적, 최적, 최악 상황에서 모두 O(n log n), 공간복잡도는 O(n)
// 시간 복잡도는 배열의 길이가 길어질수록 log n 의 배수만큼 분할하게 되고, 병합하기위해 요소를 비교하기 위해서는 O(n)이 소요되기 때문에 최종적으로 O(n log n)
// 예를 들어 배열의 길이가 8이면 3번의 분할, 배열의 길이가 32라면 5번의 분할
// 공간 복잡도는 배열을 분할하여 새로운 배열을 만들기 때문에 그만큼 메모리를 차지하게 됨