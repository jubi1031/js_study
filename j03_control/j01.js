//코드 실행의 순설르 제어하는 것을 제어문 이라고 함
// 제어문의 종류에는 조건문, 반복문, 분기문 등이 있음

//조건문
// if(조건){조건이 맞을 경우 실행되는 내용}
// if(조건){조건이 맞을 경우 실행되는 내용}else{조건이 맞지 않을 경우 실행되는 문}
// if(조건1){}else if(조건2) {}else if(조건3){}else()

let fruit = '오렌지';
if (fruit === '오렌지') {
  console.log(fruit);
} else {
  console.log('오렌지 아님');
}

let fruit1 = '오렌';
if (!'' && '오렌지') {
  console.log(fruit1);
} else {
  console.log('오렌지 아님');
}

//삼항연산자
let result = fruit == '오렌지' ? '오렌지 입니다' : '오렌지가 아닙니다';
console.log(result);

// 퀴즈
// 입력된 숫자가 짝수 이면 "짝" 출력

let testNum = 5;
if (testNum % 2 == 0) {
  console.log('짝');
} else {
  console.log('홀');
}

let result1 = testNum % 2 == 0 ? '짝' : '홀';
console.log(result1);

//퀴즈
//test2Num
//숫자 1이면하나 4넷 나머지는 많음

let test2Num = 6;
if (test2Num == 1) {
  console.log('하나');
} else if (test2Num == 2) {
  console.log('둘');
} else if (test2Num == 3) {
  console.log('셋');
} else if (test2Num == 4) {
  console.log('넷');
} else {
  console.log('많음');
}
