import { createEl, appendManyChilds } from './utils.js';
import { addToCart } from './cart.js';

export function renderProduct(products) {
  let productDiv = document.getElementById('products');
  productDiv.innerHTML = '';

  if (!products.length) {
    let h5 = createEl('h5', {
      class: 'text-center',
      inner: 'ไม่พบสินค้า',
    });
    productDiv.appendChild(h5);
    return;
  }

  products.forEach((product) => {
    let col = createEl('div', {
      class:
        'col-xs-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch mt-2 justify-content-center',
      id: product.id,
    });
    let card = createEl('div', {
      class: 'card shadow-sm text-center',
      style: 'width: 18rem;',
    });
    let img = createEl('img', {
      src: `./assets/images/${product.pictureName}`,
      height: '200px',
    });
    let cardBody = createEl('div', {
      class: 'card-body',
    });
    let sushiName = createEl('h5', {
      class: 'card-title',
      inner: product.name,
    });
    let describe = createEl('p', {
      class: 'card-title',
      inner: product.describe,
    });
    let price = createEl('p', {
      class: 'card-title',
      inner: `ราคา : ${product.price} บาท`,
    });
    let remain = createEl('p', {
      class: 'card-title',
      inner: `คงเหลือ : ${product.remainInStock} จำนวน`,
    });
    let divAddToCart = createEl('div', {
      class: 'd-flex justify-content-center',
    });

    let btnAddToCart =
      product.remainInStock > 0
        ? createEl('div', {
            class: 'btn btn-dark rounded-0 text-center',
            inner: 'เพิ่มลงตะกร้าสินค้า',
            id: product.id,
          })
        : createEl('div', {
            class: 'btn btn-dark rounded-0 text-center disabled',
            inner: 'สินค้าหมด',
            id: product.id,
          });
    btnAddToCart.addEventListener('click', addToCart);

    // insert childs
    divAddToCart.appendChild(btnAddToCart);

    let cardBodyChilds = [sushiName, describe, price, remain, divAddToCart];
    appendManyChilds(cardBody, ...cardBodyChilds);

    let cardChilds = [img, cardBody];
    appendManyChilds(card, ...cardChilds);

    col.appendChild(card);
    productDiv.appendChild(col);
  });
}
