let errorsName = [];
let errorsTelephone = [];

export function nameCheck(name) {
  return nameValidations(name);
}

export function telephoneCheck(telephone) {
  return telephoneValidations(telephone);
}

// name validate --------------------------------------

const nameCheckObj = {
  minLength: 'Минимум 2-е буквы',
  maxLength: 'Максимум 15-ть букв',
  onlyLetters: 'Только буквы',
};

function nameValidations(name) {
  errorsName = [];
  if (name.length < 2) {
    errorsName.push(nameCheckObj.minLength);
  }

  if (name.length > 16) {
    errorsName.push(nameCheckObj.maxLength);
  }

  if (!name.match(/^[а-яёa-z]+$/iu)) {
    errorsName.push(nameCheckObj.onlyLetters);
  }
  return errorsName;
}

// telephone validate --------------------------------------
const telephoneCheckObj = {
  minLength: 'Минимум 7-м цифр',
  maxLength: 'Максимум 10-ть цифр',
  onlyNumbers: 'Только цифры',
};

function telephoneValidations(telephone) {
  errorsTelephone = [];
  if (!telephone.match(/^\d+$/)) {
    errorsTelephone.push(telephoneCheckObj.onlyNumbers);
  }

  if (telephone.length < 7) {
    errorsTelephone.push(telephoneCheckObj.minLength);
  }

  if (telephone.length >= 11) {
    errorsTelephone.push(telephoneCheckObj.maxLength);
  }
  return errorsTelephone;
}
