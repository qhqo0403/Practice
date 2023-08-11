// 재귀 연습 문제 - level up

// reverse : 문자열을 인수로 받아서 글자의 순서를 뒤집어서 출력하는 재귀함수
function reverse(str){
  if (str.length === 1) {
      return str;
  }
  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
}
// 강의 솔루션
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}


// isPalindrome : 인수로 전해진 문자열이 거꾸로 뒤집어도 순서가 같은지 확인
function isPalindrome(str){
  // 이전 문제랑 비슷해서 헬퍼함수를 쓰는 방향으로 풀어봄
  let newStr;
  
  function helper(helperStr) {
      if (helperStr.length === 1) {
          return helperStr;
      }
      return newStr = helper(helperStr.slice(1)) + helperStr[0];
  }
  helper(str);

  return str === newStr ? true : false;
}
// 강의 솔루션 -> 양쪽 끝점에서 비교
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
};