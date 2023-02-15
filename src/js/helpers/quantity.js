export function quantity(str) {
  console.log(str);
  if (str.match(/[^\d]/) || str.length > 4 || str === '') {
    return 1;
  } else return str;
}
