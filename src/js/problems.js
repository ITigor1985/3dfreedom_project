import logo from '../images/mobile/problems/arrow_left.png';
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
  // const imageArrow = document.createElement("img");
  // imageArrow.src = "./images/mobile/problems/arrow_left.png";
  // console.log(imageArrow);
  const prev = document.querySelector('.slick-prev');
  prev.innerHTML='';
  prev.insertAdjacentHTML("beforeend", `<img src=${logo}>`);
});
