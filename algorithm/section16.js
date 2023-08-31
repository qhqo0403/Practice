// 기수 정렬 (radix sort) : 비교를 통한 정렬 알고리즘이 아닌 자릿수 비교를 통해서 정렬하는 방식
// 숫자들을 10개의 버킷(10진수)으로 나누고 항목의 가장 오른쪽에 위치한 숫자들을 각 버킷에 담았다가 다시 정렬하는 방식이 반복됨 -> 4자릿수가 있다면 4번 담았다가 정렬하게 됨
// 한 버킷에 여러번 있던 요소가 앞으로 가게 됨

// 특정 숫자의 i번째 자리의 수를 구하는 함수
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// 구하려는 자릿수 i 만큼 10을 제곱하고 num에서 나눈 다음 소수점 이하를 버리고 나서 10으로 나눈 나머지를 구함
// ex) i가 2라면 num에서 2번째 자리에 있는 숫자를 구함

// 특정 숫자의 자릿수를 구하는 함수
function countDigit(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// 주어진 num 이 10의 몇 승으로 이루어져있는지 구한 다음 소수점 이하 버리기, 그 다음 + 1로 숫자의 자릿수를 구하는 방식
// 자릿수를 구하면 버킷에 몇 번 들어갔다가 나와야하는지 총 횟수를 구할 수 있음!

// 최대 자릿수를 구하는 함수 -> 자릿수를 구하는 함수 활용
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, countDigit(nums[i]));
  }
  return maxDigits;
}