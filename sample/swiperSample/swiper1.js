let swipercon = new Swiper('.projectName', {
  pagination: {
    el: '.pg1',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  effect: 'fade',
});

let swipercon2 = new Swiper('.projectImg');
// 컨트롤을 연결했으므로 하나만 실행

swipercon.controller.control = swipercon2;
swipercon2.controller.control = swipercon;
