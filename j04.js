//할당연산자
let a = 5;
//a = a + 2;
a += 2;
//대입연산자를 활용한 산술 연산자의 축약버전
console.log(a);

a -= 2; //a = a - 2;
a *= 2; //a = a * 2;
a %= 2; //a = a % 2;
a **= 2; //a = a ** 2;

//증가 연산자 & 감소연산자
// ++ --

let b = 0;
console.log('증가1', b++);
console.log('증가2', b);
console.log('증가3', ++b);
