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


// Frequency Counter / Multiple Pointers - areThereDuplicates