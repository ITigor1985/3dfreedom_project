let errorsName = [];
let errorsTelephone = [];

export function nameCheck(name, lang) {
  return nameValidations(name, lang);
}

export function telephoneCheck(telephone, lang) {
  return telephoneValidations(telephone, lang);
}

// name validate --------------------------------------

const nameCheckObj = {
  minLength: 'Минимум 2-е буквы',
  maxLength: 'Максимум 15-ть букв',
  onlyLetters: 'Только буквы',
};

const nameCheckObjUa = {
  minLength: 'Мінімум 2-і літери',
  maxLength: 'Максимум 15 букв',
  onlyLetters: 'Тільки літери',
};

function nameValidations(name, lang) {
  errorsName = [];
  if (lang === 'ru') {
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
  } else {
    if (name.length < 2) {
      errorsName.push(nameCheckObjUa.minLength);
    }

    if (name.length > 16) {
      errorsName.push(nameCheckObjUa.maxLength);
    }

    if (!name.match(/^[а-яёa-z]+$/iu)) {
      errorsName.push(nameCheckObjUa.onlyLetters);
    }
    return errorsName;
  }
}

// telephone validate --------------------------------------
const telephoneCheckObj = {
  minLength: 'Минимум 7-м цифр',
  maxLength: 'Максимум 10-ть цифр',
  onlyNumbers: 'Только цифры',
};

const telephoneCheckObjUa = {
  minLength: 'Мінімум 7-м цифр',
  maxLength: 'Максимум 10 цифр',
  onlyNumbers: 'Тільки цифри',
};

function telephoneValidations(telephone, lang) {
  errorsTelephone = [];
  if (lang === 'ru') {
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
  } else {
    if (!telephone.match(/^\d+$/)) {
      errorsTelephone.push(telephoneCheckObjUa.onlyNumbers);
    }

    if (telephone.length < 7) {
      errorsTelephone.push(telephoneCheckObjUa.minLength);
    }

    if (telephone.length >= 11) {
      errorsTelephone.push(telephoneCheckObjUa.maxLength);
    }
    return errorsTelephone;
  }
}
