//import axios from 'axios';

const TOKEN = '5916397565:AAHaSeLRFKxqv4eV5RpJiV_8EtVr8AB3Dns';
const CHAT_ID = '-1001671673110';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

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

  // axios
  //   .post(URI_API, {
  //     chat_id: CHAT_ID,
  //     parse_mode: 'html',
  //     text: message,
  //   })
  //   .then(res => {
  //     this.username.value = '';
  //     this.telephon.value = '';
  //     success.style.display = 'block';
  //     setTimeout(displayNone, 10000);
  //   })
  //   .catch(err => {
  //     console.warn(err);
  //   });
});
