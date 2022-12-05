import arrow_left from '../images/mobile/problems/arrow_left.png';
import arrow_right from '../images/mobile/problems/arrow_right.png';
import arrow_right_desk from '../images/desktop/problems/arrow_right.png';
import arrow_left_desk from '../images/desktop/problems/arrow_left.png';
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
$(document).ready(function () {
  // const prev = document.querySelector('.slick-prev');
  // prev.innerHTML = '';
  // prev.insertAdjacentHTML(
  //   'beforeend',
  //   `<img src=${arrow_left} alt="стрелка в лево" class="problems-arrow-left"> `,
  // );
  const width = document.body.clientWidth;
  if (width > 767) {
    const prev = document.querySelector('.slick-prev');
    prev.innerHTML = '';
    prev.insertAdjacentHTML(
      'beforeend',
      `<img src=${arrow_left_desk} alt="стрелка в лево" class="problems-arrow-left"> `,
    );
  } else {
    const prev = document.querySelector('.slick-prev');
    prev.innerHTML = '';
    prev.insertAdjacentHTML(
      'beforeend',
      `<img src=${arrow_left} alt="стрелка в лево" class="problems-arrow-left"> `,
    );
  }
});

$(document).ready(function () {
  const width = document.body.clientWidth;
  if (width > 767) {
    const next = document.querySelector('.slick-next');
    next.innerHTML = '';
    next.insertAdjacentHTML(
      'beforeend',
      `<img src=${arrow_right_desk} alt="стрелка в вправо" class="problems-arrow-right"> `,
    );
  } else {
    const next = document.querySelector('.slick-next');
    next.innerHTML = '';
    next.insertAdjacentHTML(
      'beforeend',
      `<img src=${arrow_right} alt="стрелка в вправо" class="problems-arrow-right"> `,
    );
  }
});
