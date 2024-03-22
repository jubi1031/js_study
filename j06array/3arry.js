const fruits = ['바나나', '키위', '딸기', '사과'];

//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);

fruits[6] = '포도';
delete fruits[6];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열과 함께 사용하는 함수들

// 변수가 배열인지 확인하는 함수 - .isArray boolean 반환
console.log(Array.isArray(fruits));
//배열 아이템의 위치를 찾을 때  .includes('찾는 아이템') boolean 반환
console.log(fruits.includes('바나나'));
console.log(fruits.includes('복숭아'));

//배열 아이템 추가  - 제일 뒤 [].push('')
let pushResult = fruits.push('복숭아');
console.log(pushResult); //반환값 length
console.log(fruits); // 배열 자체가 수정됨

//배열 아이템 추가  - 제일 앞 [].unshift('')
let unshiftResult = fruits.unshift('수박');
console.log(unshiftResult); //반환값 length
console.log(fruits); // 배열 자체가 수정됨

//배열 아이템 제거  - 제일 뒤 [].pop('')
console.log(fruits.pop); //제거된 아이템 반환
console.log(fruits); // 배열 자체가 수정됨

//배열 아이템 제거  - 제일 앞 [].shift('')
console.log(fruits.shift); //제거된 아이템 반환
console.log(fruits); // 배열 자체가 수정됨

// 중간 아이템 삭제 || 추가 [].splice(삭제할 시점, 몇개 삭제할 것인가)
let sliceResult = fruits.splice(2, 1);
console.log(sliceResult); //삭제된 아이템 반환
console.log(fruits); //배열 자체가 수정됨
fruits.splice(2, 1, '아보카도', '키위');
console.log(fruits);

// 기존 배열을 잘라서 새로운 배열을 만듦 [].slice()
//let newArray = fruits.slice(0, 2);
let newArray = fruits.slice(-5);
console.log(newArray);
console.log(fruits);

// 여러개의 배열을 붙일 때 .concat()
let num1 = [0, 1, 2];
let num2 = [3, 4, 5];
let numSum = num1.concat(num2);
console.log(numSum);

let test = [...num1, ...num2];
test[0] = 10;
console.log('---------', test);

console.clear();

//중첩된 배열을 평평하게 펼치기 .flat()
let array7 = [1, 2, [33, 44, 55], 3, [66, 77, [888, 999]]];
console.log(array7.flat(2));
console.log(array7.flat()); //새로운 배열로 반환
console.log(array7); //기본배열 유지

array7 = array7.flat(2);
//특정한 값으로 배열을 채우기 .fill()
array7.fill('s', 2, 5); //3번째부터 5번 전까지 변경
array7.fill('s', 2); //3번째 부터 모두 s로 변경
console.log(array7);

//배열을 문자열로 합치기
let newText = ['안', '녕', 1, 2, 3];
let text = newText.join('_');
console.log(text);
