$(document).ready(function () {
    const width = document.body.clientWidth;
    if (width <= 767) {
      $('.instruments-wrapper').slick({
        dots: true,
        arrows: false,
      });
    }
  });