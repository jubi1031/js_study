//숫자, 문자, 불리언, null, undefined, 객체

//number
let integer = 123;
let negative = -123;
let double = 1.25;
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011;
let octal = 0o173;
let hex = 0x7b;

console.log(binary);
console.log(octal);
console.log(hex);

//특정 숫자를 0으로 나눌 때 무한대의 결과가 나올 수 있으므로 주의
console.log(0 / 123); //0
console.log(123 / 0); //Infinity
console.log(123 / -0); //-Infinity
console.log(123 / "text"); //NaN (Not a number)
