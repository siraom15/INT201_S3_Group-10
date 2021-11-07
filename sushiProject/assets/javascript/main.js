import { products } from './product-list.js';
import { renderProduct } from './product.js';
import './search.js';
import './cart.js';

document.addEventListener('DOMContentLoaded', (event) => {
  renderProduct(products);
});
