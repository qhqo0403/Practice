function add(num1) {
	return function sum(num2) {
		return num1 + num2;
	};
}
// 변수 안에 인자를 전달한 채로 함수를 할당 -> 변수가 컨텍스트를 기억하고 있다가 전달 받은 함수를 내부로 전달
const addOne = add(1);
const addTwo = add(2);

//addOne(4) => 4가 출력
// 처음부터 할당을 const addOne = add(1)(3) 으로 전달할 수도 있음!


function add(num1) {
	return function (num2) {
		return function (calculateFn) {
			return calculateFn(num1, num2);
		};
	};
}

function sum(num1, num2) {
	return num1 + num2;
}

function multiple(num1, num2) {
	return num1 * num2;
}

const addthree = add(5)(2); // addthree 가 add에 5, 2가 전달된 컨텍스트를 기억
const sumAdd = addOne(sum); // 7
const sumMultiple = addOne(multiple); // 10


function log(value) {
	return function (fn) {
		fn(value);
	};
}

const logFoo = log('foo');

logFoo((v) => console.log(v));
logFoo((v) => console.info(v));
logFoo((v) => console.error(v));
logFoo((v) => console.warn(v));



const arr = [1, 2, 3, 'A', 'B', 'C'];

function isTypeOf(type) {
	return function (value) {
		return typeof value === type;
	};
}

const isNumber = isTypeOf('number');
const isString = isTypeOf('string');

arr.filter(isNumber);
arr.filter(isString);

/* 
고치기 전
const isTypeOf = (type, value) => {
  return typeof value === type;
}

const isNumber = (value) => {
  return isTypeOf('number', value);
}
const isString = (value) => {
  return isTypeOf('number', value);
}

arr.filter(isNumber);
*/