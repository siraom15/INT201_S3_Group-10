import Product from './product.js';

function toggleSearchArea() {
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

function searchName() {
  let name = document.getElementById('searchInput').value;
  let resultProducts = Product.findByName(name);
  Product.render(resultProducts);
}

let toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', toggleSearchArea);

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchName);
