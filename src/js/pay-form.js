import { newProducts } from './products';
const LOCALSTORAGE_KEY = 'products-id';

(() => {
  const refs = {
    openPayModalBtn: document.querySelectorAll('[data-modal-pay-open]'),
    closeModalPayBtn: document.querySelector('[data-pay-close]'),
    modal: document.querySelector('[data-modal-pay]'),
  };

  refs.openPayModalBtn.forEach(item => item.addEventListener('click', toggleModal));

  refs.closeModalPayBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    if (e.target.className === 'button pay') {
      localStorage.setItem(LOCALSTORAGE_KEY, e.target.dataset.cardId);
    }
    refs.modal.classList.toggle('is-hidden');
  }
})();

const productId = localStorage.getItem(LOCALSTORAGE_KEY);

const TOKEN = '5916397565:AAHaSeLRFKxqv4eV5RpJiV_8EtVr8AB3Dns';
const CHAT_ID = '-1001671673110';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success-pay');

document.getElementById('consultation__form-pay').addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(productId);
  const productName = newProducts.filter(item => item.id === Number(productId));
  console.log(productName);

  let message = `<b>Заказ товара с сайта!</b>\n`;
  message += `<b>Название: </b> ${productName[0].name}\n`;
  message += `<b>Отправитель: </b> ${this.user.value}\n`;
  message += `<b>Телефон: </b> ${this.telep.value}\n`;
  message += `<b>Количество: </b> ${this.value.value}`;

  function displayNone() {
    success.style.display = 'none';
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
      success.style.display = 'block';
      setTimeout(displayNone, 10000);
    })
    .catch(err => {
      console.warn(err);
    });
});
