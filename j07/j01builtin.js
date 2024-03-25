//내장객체

const num = 10;
console.log(num);
console.log(num.toString());

const text = '   test   ';
console.log(text);
console.log('공백포함 문자갯수 ---', text.length);
console.log(text.trim());
console.log(text.trim());

const num2 = new Number(50);
console.log(num2);

let test = '12.6854';
console.log(parseFloat(test)); //문자를 숫자로
console.log(parseInt(test)); // 실수를 정수로 변환
console.log(parseInt('55'));

const URL = 'http://네이버.kr';
const encode = encodeURI(URL);
console.log(encode);
const decode = decodeURI(encode);
console.log(decode);

const part = '반짝.kr';
console.log(encodeURIComponent(part));
