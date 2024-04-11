const slideWrap = document.querySelector('.slideWrap'); //ul
const slide = slideWrap.querySelectorAll('.slide'); // li s
let slideWith = slide[0].getBoundingClientRect().width; // li size
const totalLength = slide.length;
let slideInterval = 2000;
let currntSlide = 0;
let sliderClone = slide[0].cloneNode(true);
console.log(sliderClone);
slideWrap.appendChild(sliderClone);

window.addEventListener('resize', () => {
  slideWith = slide[0].getBoundingClientRect().width;
});

setInterval(() => {
  currntSlide++;
  slideWrap.style.transition = `0.3s`;
  slideWrap.style.transform = `translateX(${-slideWith * currntSlide}px)`;
  if (currntSlide == totalLength) {
    setTimeout(() => {
      slideWrap.style.transition = `0s`;
      slideWrap.style.transform = `translateX(0)`;
    }, 300);
    currntSlide = 0;
  }
}, slideInterval);
