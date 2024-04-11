const slideWrap = document.querySelector('.slideWrap');
const slide = slideWrap.querySelectorAll('.slide');
let slideWith = slide[0].getBoundingClientRect().width;
const totalLength = slide.length;
let slideInterval = 2000;
let currntSlide = 0;
const btnNext = document.querySelector('.btnNext');
const btnPrev = document.querySelector('.btnPrev');

let nextSlide = () => {
  let firstElm = slideWrap.firstElementChild;
  slideWrap.style.transition = `0.3s`;
  slideWrap.style.transform = `translateX(${-slideWith}px)`;
  slideWrap.addEventListener(
    'transitionend',
    () => {
      slideWrap.appendChild(firstElm);
      slideWrap.style.transition = `0s`;
      slideWrap.style.transform = `translateX(0)`;
    },
    { once: true }
  );
};
let prevSlide = () => {
  let lastElm = slideWrap.lastElementChild;
  slideWrap.prepend(lastElm);
  slideWrap.style.transform = `translateX(${-slideWith}px)`;
  slideWrap.style.transition = `0s`;
  requestAnimationFrame(() => {
    slideWrap.style.transition = `0.3s`;
    slideWrap.style.transform = `translateX(0px)`;
  });
};

let nextSlideIntv = setInterval(nextSlide, slideInterval);

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', () => {
  clearInterval(nextSlideIntv);
  prevSlide();
  nextSlideIntv = setInterval(nextSlide, slideInterval);
});
