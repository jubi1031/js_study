const $FAQcon = document.querySelector('.faq');
const $list = FAQcon.querySelectorAll('.ques');
//이벤트 위임
//클릭대상이 ul = $FAQcon

$FAQcon.addEventListener('click', (e) => {
  const q = e.target.closest('.ques'); //e.target과 가장 가까운 .ques
  console.log('li 요소 ---', e.target.closest('li'));
  console.log('.ques 요소 ---', e.target.closest('.ques'));
  // .closest() - e.target이 .ques 를 가리키지 않으면 null반환
  if (!q) return; //.ques를 가리키지 않으면 함수 종료
  console.log(q);

  if (q.classList.contains('on')) {
    q.classList.remeve('on');
    return;
  }
  $list.forEach((item) => item.classList.remeve('on'));
  q.classList.add('on');
});

// $list.forEach((q) =>
//   q.addEventListener('click', (e) => {
//     if (e.target.classList.contains('on')) {
//       q.classList.remove('on');
//       return;
//     }
//     $list.forEach((item) => {
//       item.classList.remove('on');
//     });
//     q.classList.add('on');
//   })
// );
