export function quantity(str) {
  if (str.match(/[^\d]/) || str.length > 4 || str === '') {
    return 1;
  } else return str;
}
