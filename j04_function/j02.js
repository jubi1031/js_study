//perameters (인자)
function sum(a = 10, b = 0, ...num) {
  console.log('a -', a);
  console.log('b -', b);
  console.log('num -', num);
  console.log(arguments);
}
sum(5, 8, 2, 1, 5, 8, 10);

let test = function () {
  return;
};
let test3 = () => {};
console.log(test);

//즉시실행함수
(function run() {
  console.log('실행됐다');
})();
