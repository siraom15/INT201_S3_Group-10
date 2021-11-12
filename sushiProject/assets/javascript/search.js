import Product from './product.js';

let Search = {
  toggleSearchArea: function () {
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
  },
  searchName: function () {
    let name = document.getElementById('searchInput').value;
    let resultProducts = Product.findByName(name);
    Product.render(resultProducts);
  },
};

export default Search;
let toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', (e) => {
  Search.toggleSearchArea();
});

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', (e) => {
  Search.searchName();
});
