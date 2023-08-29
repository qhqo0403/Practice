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