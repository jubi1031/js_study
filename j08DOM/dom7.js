const btnOpen = document.querySelector('.open');
const $modal = document.querySelector('.modal');

const displayModal = () => {
  const modalElm = document.createElement('div');
  modalElm.classList.add('modal');
  modalElm.innerHTML = `
    <section>
        <p>모달 내용이 들어갑니다~ 내용이 길 수 있어요.</p>
        <button class="close">닫기</button>
    </section>
  `;
  document.body.append(modalElm);

  const btnClose = document.querySelector('.close');
  btnClose.addEventListener('click', () => {
    modalElm.remove();
  });
};

btnOpen.addEventListener('click', displayModal);

// V .open 버튼을 클릭하면
// <div></div> 요소를 생성하고
// .modal 를 classList.add
// 생성한 요소에 innerHtml() `<section></section>` 추가입력
// 생성한 요소를 body 마지막 자식으로 (append()) 추가한다.

// .close 버튼을 클릭하면
// .modal .remove()
