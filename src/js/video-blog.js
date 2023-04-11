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

// window.addEventListener('DOMContentLoaded', function () {
//   let videos = this.document.querySelectorAll('.video');

//   videos.forEach(video => {
//     video.addEventListener('click', function (e) {
//       const composed = e.composedPath();
//       console.log(composed);
//       if (video.classList.contains('ready')) {
//         return;
//       }
//       video.classList.add('ready');

//       let src = video.dataset.src;

//       video.insertAdjacentHTML(
//         'afterbegin',
//         '<iframe         src="' +
//           src +
//           '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
//       );
//     });
//   });
// });

let videos = document.querySelectorAll('[data-youtube]');

// Progressively enhance them
for (let video of videos) {
  // Get the video ID
  let id = new URL(video.href).searchParams.get('v');
  // Add the ID to the data-youtube attribute
  video.setAttribute('data-youtube', id);

  // Add a role of button
  video.setAttribute('role', 'button');

  // Add a thumbnail
  video.innerHTML = `<img alt="${video.textContent}" loading="lazy" src="https://img.youtube.com/vi_webp/${id}/maxresdefault.webp"><br>
		${video.textContent}`;
}

/**
 * Handle click events on the video thumbnails
 * @param  {Event} event The event object
 */
function clickHandler(event) {
  // Get the video link
  let link = event.target.closest('[data-youtube]');
  if (!link) return;

  // Prevent the URL from redirecting users
  event.preventDefault();

  // Get the video ID
  let id = link.getAttribute('data-youtube');

  // Create the player
  let player = document.createElement('div');
  player.innerHTML = `<iframe  src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  // Inject the player into the UI
  link.replaceWith(player);
}

// Detect clicks on the video thumbnails
document.addEventListener('click', clickHandler);
