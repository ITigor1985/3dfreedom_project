import $ from 'jquery';
$(document).ready(function () {
  const width = document.body.clientWidth;
  if (width <= 767) {
    $('.video-blog__list').slick({
      dots: true,
      arrows: false,
    });
  }
});

window.addEventListener('DOMContentLoaded', function () {
  let videos = this.document.querySelectorAll('.video');

  videos.forEach(video => {
    video.addEventListener('click', function (e) {
      const composed = e.composedPath();
      console.log(composed);
      if (video.classList.contains('ready')) {
        return;
      }
      video.classList.add('ready');

      let src = video.dataset.src;

      video.insertAdjacentHTML(
        'afterbegin',
        '<iframe         src="' +
          src +
          '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      );
    });
  });
});
