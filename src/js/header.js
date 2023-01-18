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

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    header: document.querySelector('.header-top'),
  };

  function toggleClassHeader(counterScrollMove, pixels) {
    if (counterScrollMove >= pixels) {
      refs.header.classList.add('opacity');
    } else {
      refs.header.classList.remove('opacity');
    }
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleResize);
  }

  function handleResize() {
    const { innerWidth: width } = window;
    if (width < 1440) {
      return window.addEventListener('scroll', () => {
        let counterScrollMove = pageYOffset;
        let pixels = 86;
        toggleClassHeader(counterScrollMove, pixels);
      });
    } else {
      return window.addEventListener('scroll', () => {
        let counterScrollMove = pageYOffset;
        let pixels = 111;
        toggleClassHeader(counterScrollMove, pixels);
      });
    }
  }

  window.addEventListener('resize', handleResize) ||
    window.addEventListener('scroll', handleResize);
})();
