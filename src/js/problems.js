import arrow_left from '../images/mobile/problems/arrow_left.png';
import arrow_right from '../images/mobile/problems/arrow_right.png';
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
  prev.innerHTML = '';
  prev.insertAdjacentHTML(
    'beforeend',
    `<img src=${arrow_left} alt="стрелка в лево" class="problems-arrow-left"> `,
  );
});
$(document).ready(function () {
  const next = document.querySelector('.slick-next');
  next.innerHTML = '';
  next.insertAdjacentHTML(
    'beforeend',
    `<img src=${arrow_right} alt="стрелка в вправо" class="problems-arrow-right"> `,
  );
});
