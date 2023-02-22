//import axios from 'axios';
import { URI_API, CHAT_ID } from './common/telega';
import { nameCheck, telephoneCheck } from './helpers/validateForm';

const success = document.getElementById('success');
const inputName = document.querySelector('#form-username');
const inputeTelephone = document.querySelector('#form-telephon');
//console.log(input);
inputName.addEventListener('blur', function (e) {
  nameCheck(e.currentTarget.value);
});

inputeTelephone.addEventListener('blur', function (e) {
  telephoneCheck(e.currentTarget.value);
});

document.getElementById('consultation__form').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель: </b> ${this.username.value}\n`;
  message += `<b>Телефон: </b> ${this.telephon.value}`;

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
      this.username.value = '';
      this.telephon.value = '';
      success.style.display = 'block';
      setTimeout(displayNone, 10000);
    })
    .catch(err => {
      console.warn(err);
    });
});
