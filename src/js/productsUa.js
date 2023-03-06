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
  return `<li itemscope itemtype="https://schema.org/Product" class="list-card__item">
      <div class="list-card__link">
        <div class="list-card__image-wrapper">      
  
        <img itemprop="image" loading="lazy" src="${item.images}" alt=${item.description} />
      
        </div>
        <div class="list-card__content">
          <h3 itemprop="name" class="list-card__title">
            ${item.name}
          </h3>
          <div itemprop="offers" itemscope itemtype="https://schema.org/Offer" class="list-card__pay">
            
          <p><span itemprop="price" class="list-card__text">${item.price}</span>&nbsp<span class="list-card__text" itemprop="priceCurrency" content="UAH">${item.priceCurrency}</span></p>
          
            <button class="button pay" type="button" data-card-id='${item.id}' data-modal-pay-open>Купити</button>
          </div>
        </div>
      </div>
    </li>`;
});

ref.listUa.insertAdjacentHTML('afterbegin', fragment.join(''));
