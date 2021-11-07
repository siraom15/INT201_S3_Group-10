import { createEl, appendManyChilds } from './utils.js';
import { findProductById } from './product.js';

let currentCart = [];

export function addToCart(e) {
  let product_id = e.target.id;

  let [resultProduct] = findProductById(product_id);

  if (resultProduct) {
    let index = findCartIndexByProductId(product_id);
    if (index != -1) {
      currentCart[index].quantity++;
    } else {
      let cartItem = {
        product: resultProduct,
        quantity: 1,
      };
      currentCart.push(cartItem);
    }
  }
  updateCartCountSpan(getTotalCartItem(currentCart));
  renderCartModal();
}

export function getTotalCartPrice() {
  return currentCart.reduce((prev, curr) => {
    let price = curr.product.price * curr.quantity;
    return prev + price;
  }, 0);
}

function findCartIndexByProductId(product_id) {
  return currentCart.findIndex(
    (cartItem) => cartItem.product.id === product_id
  );
}

function getTotalCartItem() {
  return currentCart.reduce((prev, curr) => prev + curr.quantity, 0);
}

function updateCartCountSpan(numberOfCartItem) {
  document.getElementById('numberCartItem').innerText = numberOfCartItem;
}

export function renderCartModal() {
  console.log('Render Carts');
  let cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  if (!currentCart.length) {
    let h5 = createEl('h5', {
      class: 'text-center',
      inner: 'ไม่มีรายการสินค้าในตะกร้า',
    });
    cartDiv.appendChild(h5);
    return;
  }
  currentCart.forEach((cartItem) => {
    let row = createEl('div', {
      class: 'row m-1',
    });

    let col1 = createEl('div', {
      class: 'col-3',
    });

    let img = createEl('img', {
      class: 'rounded mx-auto d-block',
      src: `./assets/images/${cartItem.product.pictureName}`,
      width: '100px',
    });

    let col2 = createEl('div', {
      class: 'col-2',
    });

    let p = createEl('p', {
      inner: cartItem.product.name,
    });

    let col3 = createEl('div', {
      class: 'col-2',
    });

    let span1 = createEl('span', {
      inner: `จำนวน ${cartItem.quantity} ชิ้น`,
    });

    let col4 = createEl('div', {
      class: 'col-3',
    });

    let span2 = createEl('span', {
      inner: `${cartItem.quantity * cartItem.product.price} บาท`,
    });

    let col5 = createEl('div', {
      class: 'col-2',
    });

    let btn = createEl('div', {
      class: 'btn btn-danger btn-sm rounded-0',
      inner: 'ลบ',
    });

    col1.appendChild(img);
    col2.appendChild(p);
    col3.appendChild(span1);
    col4.appendChild(span2);
    col5.appendChild(btn);

    let rowChilds = [col1, col2, col3, col4, col5];

    appendManyChilds(row, ...rowChilds);

    cartDiv.appendChild(row);
  });
}
