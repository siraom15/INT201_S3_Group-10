import Product from './product.js';

let Search = {
  toggleSearchArea: function () {
    let searchArea = document.getElementById('searchArea');
    let searchIcon = document.getElementById('searchIcon');
    let closeIcon = document.getElementById('closeIcon');
    let searchInput = document.getElementById('searchInput');

    if (searchArea.classList.contains('d-none')) {
      searchInput.focus();
      searchArea.classList.remove('d-none');
      closeIcon.classList.remove('d-none');
      searchIcon.classList.add('d-none');
    } else {
      searchInput.value = '';
      searchArea.classList.add('d-none');
      closeIcon.classList.add('d-none');
      searchIcon.classList.remove('d-none');
      Product.render();
    }
  },
  searchName: function () {
    let name = document.getElementById('searchInput').value;
    let resultProducts = Product.findByName(name);
    Product.render(resultProducts);
  },
};


let toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', (e) => {
  Search.toggleSearchArea();
});

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', (e) => {
  Search.searchName();
});

export default Search;
