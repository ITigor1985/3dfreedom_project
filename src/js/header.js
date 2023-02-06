// import $ from 'jquery';
// $('a').click(function () {
//   var elementClick = $(this).attr('href');
//   // var destination = $(elementClick).offset().top;
//   jQuery('html:not(:animated),body:not(:animated)').animate(
//     {
//       scrollTop: destination,
//     },
//     1000,
//   );
//   return false;
// });
// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.forEach(item => item.addEventListener('click', toggleModal));

//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// (() => {
//   const refs = {
//     header: document.querySelector('.header-top'),
//   };

//   function toggleClassHeader(counterScrollMove, pixels) {
//     if (counterScrollMove >= pixels) {
//       refs.header.classList.add('opacity');
//     } else {
//       refs.header.classList.remove('opacity');
//     }
//     window.removeEventListener('resize', handleResize);
//     window.removeEventListener('scroll', handleResize);
//   }

//   function handleResize() {
//     const { innerWidth: width } = window;
//     if (width < 1440) {
//       return window.addEventListener('scroll', () => {
//         let counterScrollMove = pageYOffset;
//         let pixels = 86;
//         toggleClassHeader(counterScrollMove, pixels);
//       });
//     } else {
//       return window.addEventListener('scroll', () => {
//         let counterScrollMove = pageYOffset;
//         let pixels = 111;
//         toggleClassHeader(counterScrollMove, pixels);
//       });
//     }
//   }

//   window.addEventListener('resize', handleResize) ||
//     window.addEventListener('scroll', handleResize);
// })();
function _0x5331(_0x5eaa72, _0x2d357b) {
  const _0x30767e = _0x3076();
  return (
    (_0x5331 = function (_0x533110, _0x4ae8c8) {
      _0x533110 = _0x533110 - 0xd3;
      let _0xd0758a = _0x30767e[_0x533110];
      return _0xd0758a;
    }),
    _0x5331(_0x5eaa72, _0x2d357b)
  );
}
function _0x3076() {
  const _0x1e99bf = [
    '[data-modal-open]',
    '2690FFcHJu',
    'closeModalBtn',
    'querySelectorAll',
    '12rSCVyX',
    'scroll',
    '.header-top',
    '526808wxUNbx',
    '367275QSTbGK',
    'classList',
    '[data-modal-close]',
    'querySelector',
    'add',
    '48cuEcvF',
    'is-hidden',
    'click',
    '680LyxBbH',
    'openModalBtn',
    '275548brkikP',
    'removeEventListener',
    '[data-modal]',
    'resize',
    '165447SWRIyN',
    'header',
    'toggle',
    'opacity',
    '2383410EPgDqD',
    'forEach',
    '144391bJNfxI',
    'addEventListener',
  ];
  _0x3076 = function () {
    return _0x1e99bf;
  };
  return _0x3076();
}
(function (_0x4e97ac, _0xd87494) {
  const _0x4e2380 = _0x5331,
    _0x5f5aa9 = _0x4e97ac();
  while (!![]) {
    try {
      const _0xc4e4da =
        parseInt(_0x4e2380(0xe1)) / 0x1 +
        parseInt(_0x4e2380(0xea)) / 0x2 +
        parseInt(_0x4e2380(0xeb)) / 0x3 +
        (parseInt(_0x4e2380(0xd5)) / 0x4) * (-parseInt(_0x4e2380(0xe4)) / 0x5) +
        (parseInt(_0x4e2380(0xe7)) / 0x6) * (parseInt(_0x4e2380(0xd7)) / 0x7) +
        (parseInt(_0x4e2380(0xf0)) / 0x8) * (-parseInt(_0x4e2380(0xdb)) / 0x9) +
        -parseInt(_0x4e2380(0xdf)) / 0xa;
      if (_0xc4e4da === _0xd87494) break;
      else _0x5f5aa9['push'](_0x5f5aa9['shift']());
    } catch (_0x2b5aab) {
      _0x5f5aa9['push'](_0x5f5aa9['shift']());
    }
  }
})(_0x3076, 0x29391),
  (() => {
    const _0x5dafae = _0x5331,
      _0x3639b2 = {
        openModalBtn: document[_0x5dafae(0xe6)](_0x5dafae(0xe3)),
        closeModalBtn: document[_0x5dafae(0xee)](_0x5dafae(0xed)),
        modal: document[_0x5dafae(0xee)](_0x5dafae(0xd9)),
      };
    _0x3639b2[_0x5dafae(0xd6)][_0x5dafae(0xe0)](_0x12a7aa =>
      _0x12a7aa[_0x5dafae(0xe2)]('click', _0x537c5),
    ),
      _0x3639b2[_0x5dafae(0xe5)][_0x5dafae(0xe2)](_0x5dafae(0xd4), _0x537c5);
    function _0x537c5() {
      const _0x14e792 = _0x5dafae;
      _0x3639b2['modal'][_0x14e792(0xec)][_0x14e792(0xdd)](_0x14e792(0xd3));
    }
  })(),
  (() => {
    const _0x458096 = _0x5331,
      _0x57bb2f = { header: document[_0x458096(0xee)](_0x458096(0xe9)) };
    function _0x5476ed(_0x43f078, _0x3dff66) {
      const _0x4e44ef = _0x458096;
      _0x43f078 >= _0x3dff66
        ? _0x57bb2f[_0x4e44ef(0xdc)][_0x4e44ef(0xec)][_0x4e44ef(0xef)](_0x4e44ef(0xde))
        : _0x57bb2f[_0x4e44ef(0xdc)][_0x4e44ef(0xec)]['remove'](_0x4e44ef(0xde)),
        window[_0x4e44ef(0xd8)](_0x4e44ef(0xda), _0x45cf58),
        window[_0x4e44ef(0xd8)]('scroll', _0x45cf58);
    }
    function _0x45cf58() {
      const _0x573737 = _0x458096,
        { innerWidth: _0x4f9c67 } = window;
      return _0x4f9c67 < 0x5a0
        ? window[_0x573737(0xe2)](_0x573737(0xe8), () => {
            let _0x32ad20 = pageYOffset,
              _0x555280 = 0x56;
            _0x5476ed(_0x32ad20, _0x555280);
          })
        : window['addEventListener'](_0x573737(0xe8), () => {
            let _0x3e0603 = pageYOffset,
              _0x1a4728 = 0x6f;
            _0x5476ed(_0x3e0603, _0x1a4728);
          });
    }
    window[_0x458096(0xe2)](_0x458096(0xda), _0x45cf58) ||
      window['addEventListener'](_0x458096(0xe8), _0x45cf58);
  })();
