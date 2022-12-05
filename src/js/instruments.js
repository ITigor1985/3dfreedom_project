import $ from 'jquery';
$(document).ready(function () {
  const width = document.body.clientWidth;
  if (width <= 1438) {
    $('.instruments-wrapper').slick({
      dots: true,
      arrows: false,
    });
  }
});
