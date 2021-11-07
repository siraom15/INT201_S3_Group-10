import { renderProduct, findProductByName } from './product.js';

export function toggleSearchArea() {
  let searchArea = document.getElementById('searchArea');
  let searchIcon = document.getElementById('searchIcon');
  let closeIcon = document.getElementById('closeIcon');

  if (searchArea.classList.contains('d-none')) {
    searchArea.classList.remove('d-none');
    closeIcon.classList.remove('d-none');
    searchIcon.classList.add('d-none');
  } else {
    searchArea.classList.add('d-none');
    closeIcon.classList.add('d-none');
    searchIcon.classList.remove('d-none');
  }
}

export function searchName() {
  let name = document.getElementById('searchInput').value;
  let resultProducts = findProductByName(name);
  renderProduct(resultProducts);
}

document
  .getElementById('toggleBtn')
  .addEventListener('click', toggleSearchArea);
document.getElementById('searchBtn').addEventListener('click', searchName);
