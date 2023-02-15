export function quantity(str) {
  if (str.match(/[^\d]/) || str.length > 4 || str === '') {
    return 1;
  } else return str;
}

function phonenumber(inputtxt) {
  var phoneno = /^d{10}$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    alert('message');
    return false;
  }
}
