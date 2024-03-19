//while(조건){실행문}
//조건이 false가 되거나
//실행문 내에서 break를 만날때까지 반복

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

// do-while
//일단 실행
//조건문을 뒤에서 검사
//do{}while()

//논리 연산자
// || - or
// && - and

console.log(true || false);
console.log(true || true);
console.log(false || false);

console.log(true && false);
console.log(true && true);
console.log(false && false);

console.log(false || (false && true));
