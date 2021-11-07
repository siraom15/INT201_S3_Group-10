import { renderProduct } from './product.js';
import { renderCartModal } from './cart.js';
import './search.js';
import './cart.js';

document.addEventListener('DOMContentLoaded', (event) => {
  renderProduct();
  renderCartModal();
});
