// 패턴 연습문제

// Frequency Counter - sameFrequency : 두 개의 양수를 인자로 받는 함수에서 숫자와 자릿수가 같은지 확인. 순서는 상관X
function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  // 한자리씩 비교하려면 문자화해야함.
  const first = String(num1);
  const second = String(num2);
  // 길이가 같으면 실행하고 아니면 return
  if (first.length !== second.length) {
      return false;
  }
  
  const compare = {};
  // 첫 번째 인수의 숫자와 숫자의 갯수를 객체에 저장
  for(let letter1 of first) {
    //compare[letter1] = (compare[letter1] || 0) + 1;
      compare[letter1] ? compare[letter1] += 1 : compare[letter1] = 1;
  }
  // 객체안의 요소와 두 번째 인자 비교
  for (let letter2 of second) {
      if (!compare[letter2]) {
          return false;
      } else {
          compare[letter2] -= 1;
      }
  }
  return true;
};

// 강의 솔루션
function sameFrequency01(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}


// Frequency Counter / Multiple Pointers - areThereDuplicates : 인자들 사이에 중복된 숫자가 있으면 true 아니면 false;
// 빈도패턴으로 해결함
function areThereDuplicates() {
  // 인자가 없다면 false 
  const args = [...arguments]
  if (args.length === 0) {
      return false;
  }
  const numbers = {};
  // 인자들을 객체에 담음. 중복되는 요소가 있다면 1씩 증가
  for (let num of args) {
      numbers[args[num]] = (numbers[args[num]] || 0) + 1; 
  }
  // 1 이상의 값이 있는지 확인해서 중복된 숫자가 있는지 확인
  for (let key in numbers) {
    if (numbers[key] > 1) {
        return true;
    }  
  }
  return false;
};

// 강의 솔루션
function areThereDuplicates01(...args) {
  // Two pointers
  args.sort((a,b) => a - b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

function areThereDuplicates02() {
  return new Set(arguments).size !== arguments.length;
}


// Multiple Pointers - averagePair : 정렬된 배열과 숫자를 인수로 받고 배열의 특정 두 요소의 합을 2로 나눈 값이 num과 일치하는지 확인
function averagePair(arr, num){
  // add whatever parameters you deem necessary - good luck!
  // 빈 배열일 경우 false
  if (arr.length === 0) {
      return false;
  };
  // 정렬된 배열이니까 양 끝에서 포인터 출발
  let min = 0;
  let max = arr.length - 1;
  // 두 개의 요소를 더해서 2로 나눈 값이 num과 같으면 true
  while (min < max) {
      let result = (arr[min] + arr[max]) / 2;
      if (result === num) {
          return true;
    // 두 개의 요소를 더해서 2로 나눈 값이 num보다 크면 오른쪽에서 -1, 작으면 왼쪽에서 +1
      } else if (result > num) {
          max--;
      } else {
          min++;
      }
  }
  return false;
};


// Multiple Pointers - isSubsequence : 두 개의 문자열을 인자로 받고 첫 번째 문자열의 글자가 두 번째 문자열에 포함되는지 확인
function isSubsequence(first, second) {
  // 첫 번째 문자열이 두 번째 문자열보다 길 경우
  if (first.length > second.length) {
      return false;
  };
  // 첫 번째 문자열의 첫 글자와 두 번째 문자열의 첫 글자를 비교.
  // 같은 문자면 첫번째 문자열 인덱스 +1, 다르면 두 번째 문자열 인덱스 + 1
  let i = 0;
  for (let j = 0; j < second.length; j++) {
    if (first[i] === second[j]) {
        i++;
    }
    if (i === (first.length -1)) {
        return true;
    }
  }
  return false;
}

// 강의 솔루션
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}


// Sliding Window - maxSubarraySum : 정수배열과 숫자 n을 인자로 받는 함수에서 배열의 요소를 n개 더했을 때 가장 큰 값을 반환. 배열의 n개는 연속적으로 이루어져야함
function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  // 배열의 길이가 num 보다 작은 경우
  if (arr.length < num) {
      return null;
  }
  let result = 0;
  let tempSum = 0;
  // num만큼의 첫번째 합
  for (let i = 0; i < num; i++) {
      result += arr[i];
  }
  
  tempSum = result;
  for (let j = num; j < arr.length; j++) {
      // tempSum 에서 num에 해당하는 배열의 첫번째 요소를 빼주고 num번째의 숫자를 더해줌
      tempSum = tempSum - arr[j - num] + arr[j];
      result = Math.max(tempSum, result);
  }
  return result;
}


// Sliding Window - findLongestSubstring : 문자열을 인수로 받는 함수에서 중복되지 않는 글자들의 최대 길이를 구함
function findLongestSubstring(str){
  // 글자수가 0 이면 0
  if (str.length === 0) {
      return 0;
  }
  // 저장할 곳. 각 글자와 자릿수 저장.
  const letters = {}
  // 새로 시작한 길이와 이전 길이를 비교할 변수
  let startPoint = 0;
  let longest = 0;
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // 객체안에 이미 글자가 있다면
    if (letters[char]) {
        // 해당 글자의 자리수를 startPoint로
        startPoint = Math.max(startPoint, letters[char])
    }
    // 
    longest = Math.max(longest, i - startPoint + 1);
    letters[char] = i + 1;
  }
  return longest;
}

// 강의 솔루션
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}


// 남은 한 문제는 나중에 다시보기!