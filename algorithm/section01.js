// Big O Notation (빅오 표기법) : 여러 코드들의 성능을 평가하는 방법

// 숫자를 입력받고 1 에서부터 입력받은 숫자사이의 모든 숫자를 더하는 함수
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  };
  return total;
};