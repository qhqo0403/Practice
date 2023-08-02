// patterns

// prequency counter : 객체를 이용하여 다양한 값과 빈도 수집


// 문제 : 두 개의 배열을 입력받고 첫 번째 배열의 요소가 두 번째 요소들의 제곱인 값으로 구성되어 있다면 true를 반환. 빈도(갯수)도 같아야함! 아닐경우 false 반환
const sameOne = (arr1, arr2) => {
  // 두 배열의 빈도(갯수) 비교
  if (arr1.length !== arr2.length) {
    return false
  };
  // 첫 번째 배열로 for문 (두 번째 배열로 해도 상관은 없음! 제곱과 제곱근의 차이니까)
  for (let i = 0; i < arr1.length; i++) {
    // 첫 번째 배열의 i 번째 요소를 제곱한 값의 인덱스를 담을 변수 선언
    let correctIdx = arr2.indexOf(arr1[i] ** 2);
    // 일치하는 값이 없다면 false 반환
    if (correctIdx === -1) {
      return false;
    }
    // 일치한다면 두 번째 배열에서 해당요소 제거
    arr2.splice(correctIdx, 1);
  }
  return true;
}

same([1,2,3,2], [9,1,4,4])
// 위 방식은 반복문이 중첩된 구조로 O(n^2)의 형태 -> 갯수가 많아지면 많아질수록 성능이 급격하게 떨어짐
// indexOf 자체가 반복문과 같은 원리로 사용 -> 하나하나 비교해봐야하니까
// 중첩된 반복문은 요소가 100 개가 있다면 10000 번을 반복하게 됨. -> 중첩문은 되도록 사용하지 말자.


// 빈도 카운트 패턴으로 접근한 문제 해결 방식 -> 객체 이용
const sameTwo = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 각 배열의 요소를 담을 객체 선언
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // 배열의 요소를 객체에 담고, 값이 이미 존재하면 + 1, 존재하지 않으면 1로 초기화
  for (let value in arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
  };
  for(let value of arr2){
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1        
  };
  // 첫 번째 배열이 담긴 객체의 각 키값(배열요소) 대한 반복문
  for(let key in frequencyCounter1){
    // 첫 번째 배열이 담긴 객체의 키값을 제곱한 값이 두 번째 배열을 담은 객체의 키값으로 존재하는지 확인
    if(!(key ** 2 in frequencyCounter2)){
        return false
    };
    // 존재한다면, 키값(배열요소)의 갯수(value)가 같은지 비교
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
        return false
    };
  };
  return true;
}
// 반복문이 중첩되어있는것보다 나열되어 있는 것이 성능상 좋음 -> 요소가 100개라면 100개씩 반복문의 갯수만큼만 실행하면 되기 때문!
// 따라서 O(n)임!


// 연습문제 : 두 개의 문자열을 입력받고 같은 알파벳이 같은 빈도로 존재하는지 확인

const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  };
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}