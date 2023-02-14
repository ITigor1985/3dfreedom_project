import { products } from '../data-products/products-data.js';
import img from '../images/desktop/products/*.jpg';

export const newProducts = products.map(item => {
  for (const property in img) {
    if (item.images === property) {
      item.images = img[property];
      return item;
    }
  }
});

const ref = {
  list: document.querySelector('.list-card'),
};

let fragment = document.createDocumentFragment();

fragment = newProducts.map(item => {
  return `<li class="list-card__item">
    <div class="list-card__link">
      <div class="list-card__image-wrapper">      

      <img loading="lazy" src="${item.images}" alt=${item.description} />
    
      </div>
      <div class="list-card__content">
        <h3 class="list-card__title">
          ${item.name}
        </h3>
        <div class="list-card__pay">
          <p class="list-card__text">${item.price}</p>
          <button class="button pay" type="button" data-card-id='${item.id}' data-modal-pay-open>Купить</button>
        </div>
      </div>
    </div>
  </li>`;
});

ref.list.insertAdjacentHTML('afterbegin', fragment.join(''));
