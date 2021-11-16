import './product.js';
import './search.js';
import './cart.js';
import './theme.js';
import Product from './product.js';
import Cart from './cart.js';
import Theme from './theme.js';

document.addEventListener('DOMContentLoaded', (e) => {
  Product.init();
  Cart.init();
  Theme.init();
});
