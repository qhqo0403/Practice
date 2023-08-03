// multiple pointers : 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 이동시키는 패턴

// 문제 : 정렬된 배열의 양 쪽 끝에서 시작하여 두 수의 합이 0이 되는 한 쌍 찾기 -> 끝에서 가운데로
function sumZero(arr){
  // 배열의 첫번째 요소와 나머지 요소를 계속 비교하는 방식
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}
sumZero([-4,-3,-2,-1,0,1,2,5])
// 반복문이 중첩되어 있으므로 O(n^2)

// 포인터 패턴을 사용한다면
function sumZeroAnother(arr) {
  // 첫 번째 인덱스
  let left = 0;
  // 마지막 인덱스
  let right = arr.length - 1;
  // 첫 번째 인덱스가 마지막 인덱스보다 작을 때(두 점이 만나지 않은 상태)만 반복하여 실행
  while (left < right) {
    let sum = arr[left] + arr[right];
    // sum 이 0이면 한 쌍 반환
    if (sum === 0) {
      return [arr[left], arr[right]];
    // sum이 0보다 크면 마지막에서 왼쪽으로 한칸 이동
    } else if (sum > 0) {
      right--;
    // sum이 0보다 작으면 첫 번째에서 오른쪽으로 한 칸 이동
    } else {
      left++;
    };
  };
};

// 연습문제 : 정렬된 배열을 받고 중복되지 않은 고유한 숫자의 개수를 찾는 문제

function countUniqueValuse(arr) {
  if (arr.length === 0) {
    return 0;
  };
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
