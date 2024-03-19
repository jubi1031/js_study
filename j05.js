//대소 관계 비교 연산자
//a > b 크다
//a < b 작다
//a >= b 크거나 같다
//a <= b 작거나 같다

// a === b type과 값이 같은지 확인
//a == b 값이 같은지 확인

//동등 비교 관계 연산자
console.log(2 > 3);
console.log(2 < 3);
console.log('===', 1 === '1');
console.log('==', 1 == '1');

//연산의 우선순위 ()
let t1 = 2;
let t2 = 3;
let result = t1 + (t2 * 4) / 5;

console.log('===', 1 === '1');
console.log('==', 1 == '1');
console.log('!=', 1 != '1');
console.log('!==', 1 !== '1');
console.log('true', true == 1);
console.log('true', true === 1);
console.log('false', false == 0);
console.log('false', false === 0);

// object 동등비교
let obj1 = {
  name: 'js',
};
let obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); //참조 주소(레퍼런스)가 다르기 때문
console.log(obj1.name == obj2.name); //
