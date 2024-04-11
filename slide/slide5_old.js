const slideWrap = document.querySelector('.slideWrap');
const slide = slideWrap.querySelectorAll('.slide');
let slideWith = slide[0].getBoundingClientRect().width;
const totalLength = slide.length;
let slideInterval = 2000;
let currntSlide = 0;

// setInterval(() => {
//   // 1. 0.3초간 ul이 왼쪽 방향으로 slide의 넓이만큼 이동한다.
//   // 2. 첫번째 slide를 ul의 마지막 요소로 이동한다.
//   // 3. ul의 위치를 초기화한다.
//   let firstElm = slideWrap.firstElementChild;
//   slideWrap.style.transition = `0.3s`;
//   slideWrap.style.transform = `translateX(${-slideWith}px)`;
//   setTimeout(() => {
//     slideWrap.appendChild(firstElm);
//     slideWrap.style.transition = `0s`;
//     slideWrap.style.transform = `translateX(0)`;
//   }, 300);
// }, slideInterval);

setInterval(() => {
  // 1. ul의 마지막 자식 li가 첫번째로 이동
  // 2. ul이 slide의 넓이만큼 왼쪽으로 빠져 있는 상태로 대기
  // 3. ul이 초깃값 translateX(0) transition=0.3s

  let lastElm = slideWrap.lastElementChild;
  slideWrap.prepend(lastElm);
  slideWrap.style.transform = `translateX(${-slideWith}px)`;
  slideWrap.style.transition = `0s`;
  setTimeout(() => {
    slideWrap.style.transition = `0.3s`;
    slideWrap.style.transform = `translateX(0px)`;
  }, 300);
}, slideInterval);
