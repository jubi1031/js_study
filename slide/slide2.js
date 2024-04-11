const slideWrap = document.querySelector('.slideWrap');
const slide = slideWrap.querySelectorAll('.slide');
let slideWith = slide[0].getBoundingClientRect().width;
const totalLength = slide.length;
let slideInterval = 2000;
let currntSlide = 0;

console.log(totalLength);

window.addEventListener('resize', () => {
  slideWith = slide[0].getBoundingClientRect().width;
  console.log(slideWith);
});

setInterval(() => {
  currntSlide < totalLength - 1 ? currntSlide++ : (currntSlide = 0);
  //   slideWrap.style.left = `${currntSlide * -100}%`;
  slideWrap.style.transform = `translateX(${-slideWith * currntSlide}px)`;
}, slideInterval);
