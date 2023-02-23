//import axios from 'axios';
import { URI_API, CHAT_ID } from './common/telega';
import { nameCheck, telephoneCheck } from './helpers/validateForm';
const error = document.querySelector('.error');
const errorTel = document.querySelector('.errorTel');

const success = document.getElementById('success');

document.getElementById('consultation__form').addEventListener('submit', function (e) {
  e.preventDefault();
  const {
    elements: { username, telephon },
  } = e.currentTarget;

  let errorsName = nameCheck(username.value);
  let errorsTelephone = telephoneCheck(telephon.value);

  if (errorsName.length !== 0 || errorsTelephone.length !== 0) {
    error.innerHTML = errorsName.map(item => `<p>${item}</p>`).join('');
    error.style.display = 'block';
    errorTel.innerHTML = errorsTelephone.map(item => `<p>${item}</p>`).join('');
    errorTel.style.display = 'block';
    return;
  } else {
    error.innerHTML = '';
    error.style.display = 'none';
    errorTel.innerHTML = '';
    errorTel.style.display = 'none';

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
  }
});
