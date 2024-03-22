//퀴즈1
// let inputItem = ['바나나', '키위', '딸기', '사과', '딸기', '포도'];
// //let output = ['바나나', '키위', '딸기', '사과', '딸기', '포도'];

// function replace(inputItem, from, to) {
//   let newArray = [];
//   for (let i = 0; i < inputItem.length; i++) {
//     if (inputItem[i] === from) {
//       newArray.push(to);
//     } else {
//       newArray.push(inputItem[i]);
//     }
//   }
//   return newArray;
// }

// let output = replace(inputItem, '딸기', '수박');

// console.log(output);

//퀴즈2
// let inputItem = ['바나나', '키위', '딸기', '사과', '딸기', '포도'];

// function find(inputItem, target) {
//   let count = 0;
//   for (let i = 0; i < inputItem.length; i++) {
//     if (inputItem[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }

// let count = find(inputItem, '딸기');
// console.log(count);

//퀴즈3
let inputItem1 = ['바나나', '키위', '딸기', '사과', '포도', '복숭아'];
let inputItem2 = ['바나나', '아보카도', '사과', '딸기', '포도'];

function match(inputItem1, inputItem2) {
  let newArray2 = [];
  //중복된 아이템 예외처리
  console.log('---set :', new Set(inputItem1));
  let arrSet = [...new Set(inputItem1)];
  for (let i = 0; i < inputItem1.length; i++) {
    if (inputItem2.includes(inputItem1[i])) {
      newArray2.push(inputItem1[i]);
    }
  }
  return newArray2;
}
let result3 = match(inputItem1, inputItem2);
console.log(result3);
