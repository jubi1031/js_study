//생성자 함수 = 객체를 생성하는 함수

// const apple = {
//   name: '사과',
//   color: '빨강',
//   display: function () {
//     console.log(`${tihs.color} ${tihs.name}`);
//   },
// };

// const orange = {
//   name: '오렌지',
//   color: '노랑',
//   display: function () {
//     console.log(`${tihs.color} ${tihs.name}`);
//   },
// };

//대문자로 만드는 것은 다 생성자 함수
function Fruits(name, color) {
  this.name = name;
  this.color = color;
  this.display = () => {
    console.log(`${tihs.color} ${tihs.name}`);
  };
}

let apple = new Fruits('사과', '빨강');
let orange = new Fruits('오렌지', '노랑');
console.log(apple);
console.log(orange);
