let log = (num) => {
  console.log(num);
};

let doubleLog = (num) => {
  console.log(num * 2);
};

function iterate(num, action) {
  for (let i = 0; i < num; i++) {
    action(i);
  }
}

iterate(3, log);
iterate(3, doubleLog);

function test() {
  console.log('test 실행');
}
// setTimeout(test, 1000)

setTimeout(() => {
  return console.log('test test');
}, 1000);
