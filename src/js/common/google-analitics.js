document.addEventListener('scroll', initGTMOnEvent);
document.addEventListener('mousemove', initGTMOnEvent);
document.addEventListener('touchstart', initGTMOnEvent);
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initGTM, 2000);
});

function initGTMOnEvent(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
}

function initGTM() {
  if (window.gtmDidInit) {
    return false;
  }
  window.gtmDidInit = true;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-YYXPT9DKXX');
  };
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YYXPT9DKXX';
  script.defer = true;
  document.getElementsByTagName('body')[0].appendChild(script);
}
