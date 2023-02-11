(() => {
  const refs = {
    openPayModalBtn: document.querySelectorAll('[data-modal-pay-open]'),
    closeModalPayBtn: document.querySelector('[data-pay-close]'),
    modal: document.querySelector('[data-modal-pay]'),
  };

  refs.openPayModalBtn.forEach(item => item.addEventListener('click', toggleModal));

  refs.closeModalPayBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    console.log(e.currentTarget);
    refs.modal.classList.toggle('is-hidden');
  }
})();
