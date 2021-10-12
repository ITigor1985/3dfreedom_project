$(document).ready(function () {
  const width = document.body.clientWidth;
  if (width <= 768) {
    $('.cleaning-wrapper').slick({
      dots: true,
      arrows: false,
    });
  }
});

//butt2.style.background = 'radial-gradient(44.05% 44.05% at 50% 50%, #FFE790 0%, #FFAF28 100%)';
