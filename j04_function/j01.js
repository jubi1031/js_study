//함수표현방법
//선언함수, 익명함수, 화살표함수(this)

//return 을 생략하면 undefined 반환

// function sum(num1, num2) {
//   return num1 + num2;
// }

//익명함수 이름x

let sum = (num1, num2) => num1 + num2;
console.log(sum(4, 5));

let lastName = '이';
let firstName = '주비';

let fullName = (a1, b1) => console.log(`${lastName} ${firstName}`);
let test = fullName;

fullName('이', '주비');
