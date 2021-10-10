$(document).ready(function () {
  $('.problems-list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          arrows: true,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  const prev = document.querySelector('.slick-prev');
  prev.textContent = `Prev`;
  prev.classList.add("button-slick");
  const next = document.querySelector('.slick-next');
  next.textContent = `Next`;
  next.classList.add("button-slick-right");
});
