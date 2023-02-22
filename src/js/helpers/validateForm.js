const button = document.querySelector('.consultation__form-button.submit');
const error = document.querySelector('.error');
const errorTel = document.querySelector('.errorTel');

export function nameCheck(name) {
  nameValidations(name);
}

export function telephoneCheck(telephone) {
  telephoneValidations(telephone);
}

// name validate --------------------------------------

const nameCheckObj = {
  minLength: 'Минимум 2-е буквы',
  maxLength: 'Максимум 15-ть букв',
  onlyLetters: 'Только буквы',
};

function errorName(typeError) {
  button.setAttribute('disabled', true);
  error.innerHTML = typeError;
  error.style.display = 'block';
}

function inputNameValid() {
  button.removeAttribute('disabled');
  error.style.display = 'none';
  return true;
}

function nameValidations(name) {
  if (name.length < 2) {
    errorName(nameCheckObj.minLength);
    return false;
  } else {
    inputNameValid();
  }

  if (name.length > 16) {
    errorName(nameCheckObj.maxLength);
    return false;
  } else {
    inputNameValid();
  }

  if (!name.match(/^[а-яёa-z]+$/iu)) {
    errorName(nameCheckObj.onlyLetters);
    return false;
  } else {
    inputNameValid();
  }
}
// telephone validate --------------------------------------
const telephoneCheckObj = {
  minLength: 'Минимум 7-м цифр',
  maxLength: 'Максимум 10-ть цифр',
  onlyNumbers: 'Только цифры',
};

function errorTelephone(typeError) {
  button.setAttribute('disabled', true);
  errorTel.innerHTML = typeError;
  errorTel.style.display = 'block';
}

function inputTelephoneValid() {
  button.removeAttribute('disabled');
  errorTel.style.display = 'none';
  return true;
}

function telephoneValidations(telephone) {
  if (!telephone.match(/^\d+$/)) {
    errorTelephone(telephoneCheckObj.onlyNumbers);
    return false;
  } else {
    inputTelephoneValid();
  }

  if (telephone.length < 7) {
    errorTelephone(telephoneCheckObj.minLength);
    return false;
  } else {
    inputTelephoneValid();
  }

  if (telephone.length >= 11) {
    errorTelephone(telephoneCheckObj.maxLength);
    return false;
  } else {
    inputTelephoneValid();
  }
}
