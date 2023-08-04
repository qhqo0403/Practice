// 분할과 정복(divide and conquer) : 배열이나 문자열 같은 큰 규모의 데이터셋을 탐색할 때 왼쪽에서부터 시작하여 오른쪽으로 나아가는 것이 아니라 조각으로 세분화하여 분류, (공식이름!)
// 정렬, 이진탐색 등과도 관련이 있음

// 문제 : 정렬된 배열과 숫자 n을 받고 배열안에서 n과 같은 요소의 인덱스를 반환하는 함수
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentEl = arr[middle];

    if (currentEl < val) {
      min = middle + 1;
    } else if (currentEl > val) {
      max = middle - 1;
    } else {
      return middle
    }
  }
  return -1;
}
// 반복문을 통해서 요소 하나하나를 찾는다면 선형 탐색인 O(n)을 따르다고 하더라도 배열 요소가 많아지면 시간이 더 소요됨
// 배열의 중간점을 찾아서 찾는값과 비교를 하는 방식으로 찾는 단계를 줄일 수 있음.