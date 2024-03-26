const btnHam = document.querySelector('.ham');
const $header = document.querySelector('.hd');
const menu = document.querySelectorAll('.gnb > a');
const main = document.querySelector('main');
const section = main.querySelectorAll('main>section');
console.log(section[2]);

// .ham 클릭 시 스스로에게 .off 적용
// .ham 클릭 시 header에 .on 적용
// .ham 클릭 시 main 에 .on 적용
btnHam.addEventListener('click', (e) => {
  btnHam.classList.add('off');
  $header.classList.add('on');
  main.classList.add('on');
});

// .gnb>a 클릭하면 header에 .on제거되고, .ham 에 .off  제거
menu.forEach((menuBtn, i) => {
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('클릭됬다');
    btnHam.classList.remove('off');
    $header.classList.remove('on');
    main.classList.remove('on');

    section.forEach((item) => {
      item.classList.remove('on');
    });
    section[i].classList.add('on');
  });
});
