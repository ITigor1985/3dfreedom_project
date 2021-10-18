$(document).ready(function () {
    const width = document.body.clientWidth;
    if (width <= 767) {
      $('.before-and-after__wrapper').slick({
        dots: true,
        arrows: false,
      });
    }
  });