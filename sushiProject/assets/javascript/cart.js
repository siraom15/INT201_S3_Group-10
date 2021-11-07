import { findProductById } from './product.js';

let currentCart = [];

export function addToCart(e) {
  let product_id = e.target.id;

  let [resultProduct] = findProductById(products, product_id);

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
}

function getTotalCartPrice(currentCart) {
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

function getTotalCartItem(currentCart) {
  return currentCart.reduce((prev, curr) => prev + curr.quantity, 0);
}

function updateCartCountSpan(numberOfCartItem) {
  document.getElementById('numberCartItem').innerText = numberOfCartItem;
}
