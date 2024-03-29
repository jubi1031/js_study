const $FAQcon = document.querySelector('.faq');
const $list = FAQcon.querySelectorAll('.ques');

$FAQcon.addEventListener('click', (e) => {
  const q = e.target.closest('.ques');
  if (!q) return;

  $list.forEach((item) => {
    if (item != q) {
      item.classList.remove('on');
    }
  });
  q.classList.toggle('on');
});
