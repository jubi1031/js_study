const $btn = document.querySelector('.btn1');
const $UL = document.querySelector('.list');
const $ulList = document.querySelectorAll('.list > li');

// $btn.addEventListener('click', () => {
//   //   $UL.classList.add('on');
//   //   $UL.firstElementChild.classList.add('on');
//   //   $UL.nextElementSibling.classList.add('on');
//   //   $UL.firstElementChild.nextElementSibling.classList.add('on');
//   //   $UL.lastElementChild.previousElementSibling.classList.add('on');
//   //   $UL.parentElement.classList.add('on');
//   console.log('----', $UL.childNodes);
//   console.log('----', $UL.children);
// });

console.log($ulList);

// 각 li에 이벤트 적용한 사례
// $ulList.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     $ulList.forEach((i) => {
//       i.classList.remove('on');
//     });
//     e.target.classList.add('on');
//   });
// });

// 이벤트 위임 방법으로 적용한 사례
$UL.addEventListener('click', (e) => {
  // 만약에 클릭 대상이 UL이면 아무런 이벤트 발생하지 않고 패스
  if (e.target == $UL) {
    return;
  }
  $ulList.forEach((i) => {
    i.classList.remove('on');
  });
  e.target.classList.add('on');
  // e.target.style.color = 'red';
});
