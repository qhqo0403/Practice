// 재귀(Recursion) : 자기자신을 호출하는 함수
// ex)JSON.parse, JSON.Stringify, getElement~~, querySelector
// 종료조건(base case)과 return이 있어야 함

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function someRange(num) {
  if (num === 1) return 1; // 종료조건
  return num + someRange(mun - 1);
}


// 팩토리얼
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
// 재귀함수로 만든다면
function cFactorial(num) {
  if (num === 1) return 1;
  return num * cFactorial(num - 1);
}


// 헬퍼 재귀 함수 : 재귀 함수가 아닌 (외부)함수 내부에 재귀 함수를 호출하는 방식
function collectOddValues(arr) {
  const result = []; // 재귀 함수가 호출되면서 배열이 리셋되지 않도록 외부함수에 선언

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) { // 배열의 요소가 홀수 일 때에만 result 배열에 push
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1)); // 인자로 전달된 배열의 맨 앞 요소를 제거해서 다시 인자로 전달 
  }
  helper(arr);

  return result;
}
// 순수 재귀 함수
function pureCollectOddValues(arr) {
  let newArr = []; // 배열이 매번 리셋됨

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(pureCollectOddValues(arr.slice(1))); // 함수가 호출될 때마다 배열이 리셋되기 때문에 concat 사용

  return newArr;
}
// 순수 재귀함수를 사용하는 경우 slice, concat, 스프레드 연산자(...)를 이용해서 배열을 합칠수 있음