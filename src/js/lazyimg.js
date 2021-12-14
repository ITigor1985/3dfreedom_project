const imgGallery = document.querySelectorAll('img');
imgGallery.forEach(image => {
  image.classList.add('lazyload');
  image.setAttribute('data-src', image.src);
  image.removeAttribute('src');
  
});

generateScript();

function generateScript() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossOrigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';
  document.body.appendChild(script);
}
