import { newProducts } from './products';
import { URI_API, CHAT_ID } from './common/telega';
const LOCALSTORAGE_KEY = 'products-id';

const refs = {
  openPayModalBtn: document.querySelectorAll('[data-modal-pay-open]'),
  closeModalPayBtn: document.querySelector('[data-pay-close]'),
  modal: document.querySelector('[data-modal-pay]'),
  success: document.getElementById('success'),
  windowPay: document.querySelector('.product'),
  plus: document.querySelector('.plus'),
  minus: document.querySelector('.minus'),
  quantity: document.querySelector('.modal-form__input.quantity'),
};

refs.plus.addEventListener('click', () => {
  refs.quantity.value = Number(refs.quantity.value) + 1;
  if (Number(refs.quantity.value) > 1) {
    refs.minus.removeAttribute('disabled');
  }
  console.log(refs.quantity.value);
});

refs.minus.addEventListener('click', () => {
  refs.quantity.value = Number(refs.quantity.value) - 1;
  if (Number(refs.quantity.value) <= 1) {
    refs.minus.setAttribute('disabled', true);
  }
  console.log(refs.quantity.value);
});

(() => {
  refs.openPayModalBtn.forEach(item => item.addEventListener('click', toggleModal));

  refs.closeModalPayBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    let fragment = document.createDocumentFragment();
    if (e.target.className === 'button pay') {
      localStorage.setItem(LOCALSTORAGE_KEY, e.target.dataset.cardId);

      fragment = newProducts.map(item => {
        if (item.id === Number(e.target.dataset.cardId)) {
          return `
                    <div class="list-card__link pay">
                      <div class="list-card__image-wrapper pay">      

                      <img loading="lazy" src="${item.images}" alt=${item.description} />
                    
                      </div>
                      <div class="list-card__content">
                        <h3 class="list-card__title container">
                          ${item.name}
                        </h3>
                      
                      </div>
                    </div>
                  `;
        }
      });
      refs.windowPay.insertAdjacentHTML('afterbegin', fragment.join(''));
    } else {
      refs.windowPay.innerHTML = '';
      refs.quantity.value = 1;
    }
    refs.modal.classList.toggle('is-hidden');
  }
})();

document.getElementById('consultation__form-pay').addEventListener('submit', function (e) {
  e.preventDefault();
  const productId = localStorage.getItem(LOCALSTORAGE_KEY);
  const productName = newProducts.filter(item => item.id === Number(productId));

  let message = `<b>Заказ товара с сайта!</b>\n`;
  message += `<b>Название: </b> ${productName[0].name}\n`;
  message += `<b>Отправитель: </b> ${this.user.value}\n`;
  message += `<b>Телефон: </b> ${this.telep.value}\n`;
  message += `<b>Количество: </b> ${this.value.value}`;

  function displayNone() {
    refs.success.style.display = 'none';
  }

  const newPost = {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message,
  };

  fetch(URI_API, {
    method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
    body: JSON.stringify(newPost), // Тело запроса в JSON-формате
    headers: {
      // Добавляем необходимые заголовки
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      this.user.value = '';
      this.telep.value = '';
      this.value.value = '1';
      localStorage.removeItem('LOCALSTORAGE_KEY');
      refs.success.style.display = 'block';
      refs.minus.setAttribute('disabled', true);
      setTimeout(displayNone, 10000);
    })
    .catch(err => {
      console.warn(err);
    });
});
