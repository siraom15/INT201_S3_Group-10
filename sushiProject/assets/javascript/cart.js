import { products } from './product-list.js';
import { findProductById } from './utils.js';

let currentCart = [];

export function addToCart(e) {
  let id = e.target.id;
  let [resultProduct] = findProductById(products, id);
  if (resultProduct) {
    let index = findCartIndexByProductId(resultProduct.id);
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
  console.log(currentCart);
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
