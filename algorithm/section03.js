// 알고리즘 : 특정 작업을 달성하기 위한 과정이나 일련의 단계, 문제를 해결하기 위해 수행해야 하는 일련의 수학적 단계 / 특정한 광고를 사용자에게 제안하는 것

// 1) 문제 해결을 위한 계획 수립 -> 문제 상황 세분화
// 2) 패턴 파악

/* 
// 문제 파악하기
1) 문제를 내 방식으로 재정의하기
2) 어떤 입력값이 있는지
3) 출력값은 무엇인지, 입력값이 출력값에 어떤 영향을 미치는지
    -> 충분한 정보가 주어졌는지 확인
4) 함수 또는 결과가 반환해야하는 것은 무엇인가, 문제에서 가장 중요한 것은 무엇인가
 */

// 구체적 예시 찾기 -> 문제를 이해하는데에 도움이 됨

// 세부 분석 -> 수행해야하는 단계를 적어보기, 빈 값이 입력되는 상황은 항상 가정하기

// 문제 해결 or 단순화 -> 예시를 찾고 분석을 끝낸 후 바로 해결할 수 있으면 하고 안되면 어려운 부분 넘기고 단순한 부분부터 다시 집중하기

// 리팩토링 -> 더 나은 성능, 속도, 접근법 등이 있는지 고민. 다른 해결책과 비교해보기. 이전에 풀었던 문제들과는 어떤 유사점이 있는지


// 예시 : 문자열을 받아서 해당 문자열의 갯수가 담긴 객체를 반환하는 함수

const charCount = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

const charCount01 = (str) => {
  const obj = {};
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      char = char[i].toLowerCase();
      if (obj[char] > 0) {
        obj[char] = ++obj[char] || 1;
      }
    }
  }
  return obj;
}
// 정규 표현식이 직접 비교하는 것보다 성능이 떨어질 수 있음.

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  if (!(code > 45 && code < 58 ) // nemeric (0-9)
    && !(code > 64 && code < 91) // upper alpha (A-Z)
    && !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  return true;
}

const charCount02 = (str) => {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char[i].toLowerCase();
      if (obj[char] > 0) {
        obj[char] = ++obj[char] || 1;
      }
    }
  }
  return obj;
}