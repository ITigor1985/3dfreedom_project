import { products_ua } from '../data-products/products-data.js';
import img from '../images/desktop/products/*.jpg';

export const newProductsUa = products_ua.map(item => {
  for (const property in img) {
    if (item.images === property) {
      item.images = img[property];
      return item;
    }
  }
});

const ref = {
  listUa: document.querySelector('.list-card-ua'),
};

let fragment = document.createDocumentFragment();

fragment = newProductsUa.map(item => {
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
            <button class="button pay" type="button" data-card-id='${item.id}' data-modal-pay-open>Купити</button>
          </div>
        </div>
      </div>
    </li>`;
});

ref.listUa.insertAdjacentHTML('afterbegin', fragment.join(''));
