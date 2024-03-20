//callback 함수
//

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//add(1, 2);
//multiply(3, 4);

function calc(a, b, action) {
  //전달된 action 은 콜백함수이다

  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
}

calc(3, 5, add);
calc(3, 5, multiply);
calc(3, -5, multiply);
