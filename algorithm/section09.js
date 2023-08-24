// 검색(search) 알고리즘

// 선형 검색(linear search) : 특정 값을 찾을 때 한 번의 하나의 항목을 확인하면서 모든 항목을 탐색
// 자바스크립트 메서드로는 indexOf, includes, find, findIndex
// 데이터가 정렬되어있지 않거나 규칙이 없을 때
// O(n)으로 배열의 길이가 길면 길수록 오래걸림

// 연습문제 : 배열과 숫자를 인수로 받고 숫자가 배열안에 포함되어 있는지 확인하는 함수
function linearSearch(arr, n){
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) {
          return i; // indexOf 을 사용하면 반복문이 중첩
      }
  }
  return -1;
}