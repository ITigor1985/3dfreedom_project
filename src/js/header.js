import $ from 'jquery';
// $('a').click(function () {
//   var elementClick = $(this).attr('href');
//   // var destination = $(elementClick).offset().top;
//   jQuery('html:not(:animated),body:not(:animated)').animate(
//     {
//       scrollTop: destination,
//     },
//     1000,
//   );
//   return false;
// });
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach(item => item.addEventListener('click', toggleModal));

  // refs.openModalBtn[0].addEventListener('click', toggleModal);
  // refs.openModalBtn[1].addEventListener('click', toggleModal);
  // refs.openModalBtn[2].addEventListener('click', toggleModal);
  // refs.openModalBtn[3].addEventListener('click', toggleModal);
  // refs.openModalBtn[4].addEventListener('click', toggleModal);
  // refs.openModalBtn[5].addEventListener('click', toggleModal);
  // refs.openModalBtn[6].addEventListener('click', toggleModal);
  // refs.openModalBtn[7].addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
