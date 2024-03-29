const $ham = document.querySelector('.ham');
const $gnb = document.querySelector('.gnb');
const $person = document.querySelector('.person');

$ham.addEventListener('click', () => {
  $gnb.classList.toggle('on');
  $person.classList.toggle('on');
});
$aLink.addEventListener('click', () => {
  $li.classList.remove('on');
});
$gnb.addEventListener('click', (e) => {
  if (!e.target.closest('a')) return;
  if (e.target.closest('a').parentElement.parentElement === $gnb) {
    e.preventDefault();
  }
  $li.forEach((el) => {
    if (el != e.target.closest('li')) {
      el.classList.remove('on');
    }
  });
  $gnb.querySelectorAll('li').forEach((el) => el.classList.remove('on'));
  e.target.closest('li').classList.toggle('on');
});
let mainSlide = new Swiper('.mainSlide', {
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  pagination: {
    el: '.pg1',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

let eduSlide = new Swiper('.eduSlide', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 32,
  loop: true,
  autoplay: {
    delay: 3000,
  },
});
