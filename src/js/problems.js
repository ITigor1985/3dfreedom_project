import $ from 'jquery';
$(document).ready(function () {
  $('.problems-list').slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          arrows: true,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1,
        },
      },
    ],
  });
});
