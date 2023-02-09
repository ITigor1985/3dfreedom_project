import { products } from './products-data.js';

document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const ref = {
    list: document.querySelector('.products__list'),
  };
  ref.butt.addEventListener('click', e => console.log(e));

  let fragment = document.createDocumentFragment();

  fragment = products.map(item => {
    return `<li data-card-id =${item.id}><div>${item.name}</div></li>`;
  });

  ref.list.insertAdjacentHTML('afterbegin', fragment.join(''));
}
