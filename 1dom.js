// 셀렉터

const Etext = document.querySelector('.test');
const Etext3 = document.querySelectorAll('.test');
console.log(Etext);
console.log(Etext3);

const Etext2 = document.getElementsByClassName('text');
// test앞에 .없음 주의
console.log(Etext2);

const $list = document.querySelectorAll('.list>li');
// 가상태그는 안되는 걸로 기억
console.log($list);

document.querySelectorAll('.list>li').forEach((item) => {
  item.classList.add('on');
});

const $html = document.documentElement;
const $body = document.body;
// console.log($html);
// console.log($body);

const $colorMode = document.querySelector('.colorMode');

// 버튼을 클릭하면 html의 :root 정보를 변경한다.
// $colorMode.addEventListener('click', changColor);

// function changColor() {
//   $html.style.setProperty('--main', 'white');
//   $html.style.setProperty('--dark', 'black');
// }

let changColor = () => {
  //   $html.style.setProperty('--main', 'white');
  //   $html.style.setProperty('--dark', 'black');
  $body.classList.add('on');
};

// $colorMode.addEventListener('click', changColor);

let changColor2 = () => {
  //배경이 랜덤하게 변경된다.
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  $html.style.setProperty('--main', randomColor);
};
//버튼을 클릭하면 배경 컬러가 랜덤하게 변경되는 함수를 호출한다.
$colorMode.addEventListener('click', changColor2);
