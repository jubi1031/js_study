const products = [
  { productName: '휴대용 충전식 손전등', price: 25000, stock: 50 },
  { productName: '보조 배터리', price: 35000, stock: 30 },
  { productName: '무선 이어폰', price: 80000, stock: 20 },
  { productName: '스마트폰 케이스', price: 20000, stock: 100 },
  { productName: '블루투스 스피커', price: 45000, stock: 40 },
];

console.log(products[0].productName);
// console.log(products[1].productName);
// console.log(products[2].productName);
// console.log(products[3].productName);
// console.log(products[4].productName);
//
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].productNames);
// }
//
for (let list of products) {
  console.log(list.productName);
}

// 배열과 함께 사용되는 고차함수
// forEach, find, findIndex, some, every, filter, map, sort, reduce

//forEach
//[1,2,3,4,5,6].forEach(function(a,i,arr){});
// [1, 2, 3, 4, 5, 6].forEach((a, i, arr) => {
//   console.log(a);
//   console.log(i);
//   console.log(arr);
// });
//[1,2,3,4,5,6].forEach((a)=> console.log(a));
products.forEach((item, i, a) => {
  //console.log(a.length);
  let infoPrice = item.price.toLocaleString('ko-KR');
  console.log(
    // `상품NO ${i + 1}: ${item.productName}(${item.price.toLocaleString(
    //   'ko-KR'
    // )}원)`
    `상품NO ${i + 1}: ${item.productName}(${infoPrice}원)`
  );
});

//find 조건에 맞는 아이템(첫번째)을 찾아서 반환
let result = products.find((item) => item.price === 25000);
console.log('find ---', result);

result = products.findIndex((item) => item.price === 25000);
console.log('findIndex ----', result);

//some 배열 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.stock < 20);

//every 배열 아이템들이 모두 조건에 맞는지 확인 & boolean
result = products.every((item) => item.stock > 10);

//filter 조건에 맞는 모든 아이템을 새로운 배열[]로 반호나
result = products.filter((item) => item.price === 25000);

//map 배열 아이템을 각각 한수처리를 하고 새로운 배열로 생성
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = num.map((item) => {
  if (item % 2 == 0) {
    return item * 2;
  } else {
    return item;
  }
});
//result = num.map((item) => item * 2);
console.log(num);
//console.log((result[0] = 5));
//console.log(result);
console.clear();

//sort
const nums = [20, 5, 1, 8, 90, 40, 55, 6];
const texts = ['h1', 'abc', 'def'];
console.log(texts);

console.log(nums);
//결과 < 0 a가 앞으로 정렬, 오름차순
//결과 > 0 b가 앞으로 정렬, 내림차순
nums.sort((a, b) => a - b); //오름
nums.sort((a, b) => b - a); //내림
console.log(nums);

//가나다 순으로 정렬
texts.sort((a, b) => a.localeCompare(b));
console.log(texts);
texts.reverse(); //반대로 정렬
console.log(texts);

//reduce 모든 배열의 합을 구할 때 유용하게 사용됨
//ex)쇼핑몰 장바구니 값의 합을 구할때
let result2 = nums.reduce((sum, item) => (sum += item), 0);
console.log(result2);

setTimeout(() => {}, 1000);
