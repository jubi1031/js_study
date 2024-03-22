//객체 object
//객체 복합데이터
//key, value <- 프로퍼티
//key - 숫자(0), 문자(name), 문자열(['name-last'])
//valuee - 원시타입의 데이터, 객체([], {}, function(){})

let a = 'test';
console.log(a.endsWith('t'));

let apple = {
  name: '사과',
  0: '빨간사과',
  'hi-bye': '안녕',
  ['hi-bye2']: '안녕',
};

console.log(apple[0]);
console.log(apple.name); //코딩하는 시점에서 정적으로 접근에 확정됨
console.log(apple['hi-bye']);
console.log(apple['hi-bye2']);

const obj = {
  name: '개냥이',
  age: 5,
  //fell : 'happy'
};

function addkey(o, k, v) {
  o[k] = v;
}
function deleteKey(o, k) {
  delete o[k];
}
addkey(obj, 'feel', 'happy');
deleteKey(obj, 'age');
console.log(obj);

//key와 value 값이 같은name일 경우 생략 가능 (짧게 줄여 쓸 수 있음)

const x = 0;
const y = 0;
//const coord = {x: x, y: y};
const coord = { x, y };

function makeObj(name, age) {
  return {
    name, //name:name
    age, //age:age
  };
}

// 객체 내부에 함수 = method
let numTest = 10;
console.log(numTest.toString());
let textTest = 'sample';
console.log(textTest.length);

const orange = {
  name: '오렌지',
  color: '노랑',
  display: function () {
    console.log(`${this.color} ${this.name}`);
  },
};
console.clear();
console.log(orange.color);
console.log(orange.display());
