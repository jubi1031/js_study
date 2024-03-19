//객체 = 복합데이터
// {key: value, key:value, ...}

let apple = {
  name: '사과',
  color: '빨강',
  display: '빨간사과',
};

let orange = apple;

console.log(apple);
console.log(orange);
orange.name = '오렌지';
console.log('---------', apple);
console.log('---------', orange);
// console.log(apple.name);
// console.log(apple.color);
// console.log(apple.display);

// let age = 5;
// let age2 = age;

// console.log(age);
// console.log(age2);
// age2 = 10;
// console.log(age, age2);

console.log(typeof apple);
console.log(typeof orange);

let test = {};
console.log('형변환1', typeof test);
test = 123;
console.log('형변환2', typeof test);
test = () => {};
console.log('형변환3', typeof test);
