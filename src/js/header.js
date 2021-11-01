(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  $('a').click(function() {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({
            scrollTop: destination,
        },
        500,
    );
    return false;
});