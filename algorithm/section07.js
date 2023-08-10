// 재귀 연습문제 - basic


// 1) Math.pow의 기능을 하는 재귀함수 만들기
function power(num1, num2) {
  if (num2 === 0) {
    return 1;
  }
  return num1 * power(num1, num2 - 1);
}

// 2) factorial(n!) 기능을 하는 재귀함수 만들기
function factorial(n){
  if (n === 0) {
      return 1;
  }
  return n * factorial(n - 1);
}

// 3) productOfArray : 배열의 요소를 곱한 값을 출력하는 재귀함수
function productOfArray(arr) {
  if (arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// 4) recursiveRange : 인자로 전달된 숫자부터 0까지 더한 값을 반환하는 재귀함수
function recursiveRange(n){
  if (n === 0) {
      return 0;
  }
  return n + recursiveRange(n - 1);
}

// 5) fib : 피보나치 수열만들기
function fib(n){ 
    if (n <= 2) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}