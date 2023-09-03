// 기수 정렬 (radix sort) : 비교를 통한 정렬 알고리즘이 아닌 자릿수 비교를 통해서 정렬하는 방식
// 숫자들을 10개의 버킷(10진수)으로 나누고 항목의 가장 오른쪽에 위치한 숫자들을 각 버킷에 담았다가 다시 정렬하는 방식이 반복됨 -> 4자릿수가 있다면 4번 담았다가 정렬하게 됨
// 한 버킷에 여러번 있던 요소가 앞으로 가게 됨

// 특정 숫자의 i번째 자리의 수를 구하는 함수 -> 자릿수는 인덱스의 반대, 제일 끝 숫자가 0번째 자리
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// 구하려는 자릿수 i 만큼 10을 제곱하고 num에서 나눈 다음 소수점 이하를 버리고 나서 10으로 나눈 나머지를 구함
// ex) num이 4자리 숫자고 i가 2라면 num에서 뒤에서부터 3번째 자리에 있는 숫자를 구함

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

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums); // 배열 내의 최대 자릿수 구하기
  for (let k = 0; k < maxDigitCount; k++) { // 요소들을 버킷내에 넣었다 빼는 수 = maxDigitCount
    let digitBuckets = Array.from({length: 10}, () => []); // 하나의 버킷(빈 배열)을 담고 있는 전체 배열 생성
    for (let i = 0; i < nums.length; i++) { // nums 배열 안에 모든 요소들에 대하여 반복문 실행
      let digit = getDigit(nums[i], k); // 자릿수 k 에 따라서 해당 배열 요소의 자릿수에 어떤 숫자가 있는지 구함
      digitBuckets[digit].push(nums[i]); // 숫자에 알맞는 버킷에 넣기
    }
    nums = [].concat(...digitBuckets); // nums 에 배열을 재할당.
  }
  return nums;
}

// 기수정렬의 빅오표기 : 시간 복잡도는 평균, 최적, 최악의 상황에서 모두 O(nk), 공간 복잡도는 O(n + k);
// n은 배열의 길이(정렬하려는 갯수), k는 수의 자릿수 -> k 가 커질수록(수의 자릿수가 커질수록) 시간에 많은 영향을 끼칠수 있음
// 기수정렬은 다른 비교정렬보다는 빠르지만 컴퓨터가 숫자를 저장하는 방식에 제한으로 인해 k 가 log n 이 될수도 있음 -> log n 이 된다면 n log n 으로 다른 비교 정렬과 같을 수 있다.
// 공간복잡도는 강의에서 나오진 않았지만 추측하건데 자릿수만큼 배열들을 만들기 때문이라고 생각!