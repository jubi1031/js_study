const $FAQcon = document.querySelector('.faq');
const $list = FAQcon.querySelectorAll('.ques');

let isTrue = true;

$list.forEach((q) =>
  q.addEventListener('click', (e) => {
    if (e.target.classList.contains('on')) {
      q.classList.remove('on');
      return;
    }
    $list.forEach((item) => {
      item.classList.remove('on');
    });
    q.classList.add('on');
  })
);
