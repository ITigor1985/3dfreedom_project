

  $(document).ready(function(){
    $('.problems-list').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 375,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      });
  });