

  $(document).ready(function(){
    
    $('.problems-list').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
               centerMode: true,
               centerPadding: '30px',
              slidesToShow: 1
            }
          }
        ]
      });
  });
  $(document).ready(function(){
  const prev = document.querySelector(".slick-prev")
  prev.textContent=`Prev`
console.log(prev)
  })