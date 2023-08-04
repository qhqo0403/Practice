// 기준점 이동 패턴(sliding window) : 배열이나 문자열 같은 일련의 데이터를 입력하거나, 특정한 방식으로 데이터의 하위집합을 찾는 패턴, (공식이름 X)

// 문제 : 정수배열과 n이라는 수를 취하는 함수는 배열의 연속된 n개의 요소를 합한 값이 가장 큰 값을 반환
function maxSubarraySum(arr, num) {
  // num 이 배열의 길이보다 크다면 실행 X
  if (num > arr.length){
    return null;
  }
  // 배열의 요소가 음수일수도 있으니까 가장 큰 음수값을 max로 선언
  let max = -Infinity;
  // 배열의 마지막 요소까지 계산을 하는게 아니라 특정 인덱스 포함해서 이후로의 num 개이기 때문에 배열 전체 길이에서 num을 빼고 +1
  for (let i = 0; i < arr.length - num + 1; i ++){
    let temp = 0;
    // 특정 인덱스 이후의 3개의 요소를 구하는 반복문
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    // 더한 값들을 max 와 비교해서 큰 값을 max에 대입
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
// 마찬가지로 중첩 반복문이기 때문에 요소가 많아질 경우 성능이 떨어질 수 있음. -> O(n^2)
// 첫 번째 합을 구하고 두 번째 합을 구할 때 중복된 요소들의 합을 매번 다시 계산하게 됨

// 패턴 적용
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  // num 이 배열의 길이보다 크다면 실행 X
  if (arr.length < num) return null;
  // 현재의 인덱스에서 이후  num개의 요소 더하기
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // 이전 계산값에서 첫 번째 요소의 값을 빼주고 num + 1 자리의 요소를 더해주는 방식 -> 매번 중복된 요소들의 합을 다시 구할 필요 없음
    tempSum = tempSum - arr[i - num] + arr[i];
    // 둘 중의 큰 값 대입
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
// 어떤 범위를 위치로 정해서 통째로 이동한다고 생각!!
// 반복문이 중첩되어있지 않기 때문에 O(n) 이 될 수 있음.