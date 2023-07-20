// Array : type[] 나 Array<type>의 형태로 만듦

// 문자열 배열
const user: string[] = [];
user.push('Tony');

// 숫자 배열
const numList: number[] = [10, 18, 20];
numList[0] = 12;

// 커스텀 배열 타입
type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({x: 7, y: 8});

// 중첩된 배열

// 2차원
const texts: string[][] = [["t", "e", "x", "t"], ["t", "e", "x", "t"], ["t", "e", "x", "t"]];
// 3차원
const num: number[][][] = [[[1]]];
