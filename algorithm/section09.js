// 검색(search) 알고리즘

// 선형 검색(linear search) : 특정 값을 찾을 때 한 번의 하나의 항목을 확인하면서 모든 항목을 탐색
// 자바스크립트 메서드로는 indexOf, includes, find, findIndex
// 데이터가 분류되어있지 않을 때
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


// 이진 검색(binary search) : 중간 지점에서부터 시작해서 항목을  찾을 때까지 범위를 좁혀감
// 분할과 정복
// 데이터가 분류되어 있거나 순서가 있어야함
// 평균적으로는 O(log n) 이고 최선의 경우에는 O(1)

// 연습문제 : 정렬된 배열과 숫자를 인수로 받고 해당 숫자가 배열안에 있는지, 있다면 인덱스를 반환하는 함수
function binarySearch(arr, n){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2); // 시작점과 끝점의 중간점(평균) 계산하려면 
  
  while (left < right && arr[mid] !== n) {
      if (arr[mid] < n) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === n ? mid : -1;
}


// 나이브 문자열 검색 (naive string search) : 긴 문자열에서 부문 문자열을 검색

// 연습문제 : 긴 문자열과 특정 패턴 문자열을 인자로 받고 패턴 문자열이 긴 문자열에 몇 번이나 등장하는지 카운트하는 함수
function naiveSearch(str1, str2) {
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; i++) {
      if (str2[j] !== str1[i + j]) {
        break;
      }
      if (j === str2.length - 1) {
        count++;
      }
    }
  }
  return count;
}