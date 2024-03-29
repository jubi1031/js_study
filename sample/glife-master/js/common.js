const $ham = document.querySelector('.ham');
const $gnb = document.querySelector('.gnb');
const $person = document.querySelector('.person');
const $li = $gnb.querySelectorAll('li');
const $aLink = $gnb.querySelectorAll('a');

$ham.addEventListener('click', (e) => {
  e.preventDefault();
  $gnb.classList.toggle('on');
  $person.classList.toggle('on');
  $li.forEach((el) => {
    el.classList.remove('on');
  });
});

$gnb.addEventListener('click', (e) => {
  let closestA = e.target.closest('a');
  let closestLI = e.target.closest('li');

  if (!closestA) return;

  if (closestA.parentElement.parentElement === $gnb) {
    e.preventDefault();
  } else {
    $li.forEach((el) => {
      el.classList.remove('on');
    });
    $gnb.classList.remove('on');
    $person.classList.remove('on');
  }

  $li.forEach((el) => {
    if (el != closestLI) {
      el.classList.remove('on');
    }
  });

  if (closestLI) {
    closestLI.classList.toggle('on');
  }
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
