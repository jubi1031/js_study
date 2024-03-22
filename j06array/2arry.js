//wrapper 객체

//배열생성방법

let arry1 = [0, 1, 2, 3, 4, 5];
let arry2 = new Array('a', 'b');

console.log(typeof arry1);
console.log(typeof arry2);
console.log(arry2);
let arry3 = Array.of(1, 2, 3, 4, 5, 6, 7);
console.log(arry3);

let arry4 = [1, 2, 3, 4, 5, 6, 7, 8];
let arry5 = Array.from(arry4);
console.log(arry5);

//배열을 동일한 메모리 크기를 가지며,
//연속적으로 이어져 있어야 함
// 자바스크립트 배열은 일반적 배열의 동작을 휴앤낸 특수 객체!

let arry6 = Array.from({
  0: '안녕',
  1: '하세요',
  length: 2,
});
console.log(arry6.length);
console.log(arry6[0]);
console.log(arry6[1]);

console.log(arry4.length);
console.log(arry4[0]);
