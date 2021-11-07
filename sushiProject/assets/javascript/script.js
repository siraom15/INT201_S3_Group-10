import { products as prodData } from './product.js';

function createEl(elName, attributes) {
  let el = document.createElement(elName);
  for (const attr in attributes) {
    if (attr == 'inner') {
      el.innerHTML = attributes[attr];
    } else {
      el.setAttribute(attr, attributes[attr]);
    }
  }
  return el;
}

function appendManyChilds(parent, ...childs) {
  childs.forEach((e) => parent.appendChild(e));
}

function renderProduct(prodData) {
  let productDiv = document.getElementById('products');

  // delete productDiv childs
  productDiv.innerHTML = '';

  if (!prodData.length) {
    let h5 = createEl('h5', {
      class: 'text-center',
      inner: 'ไม่พบสินค้า',
    });
    productDiv.appendChild(h5);
  }
  // create element
  prodData.forEach((product) => {
    let col = createEl('div', {
      class:
        'col-xs-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch mt-2 justify-content-center',
      id: product.id,
    });
    let card = createEl('div', {
      class: 'card shadow-sm text-center',
      style: 'width: 18rem;',
    });
    let img = createEl('img', {
      src: `./assets/images/${product.pictureName}`,
      height: '200px',
    });
    let cardBody = createEl('div', {
      class: 'card-body',
    });
    let sushiName = createEl('h5', {
      class: 'card-title',
      inner: product.name,
    });
    let describe = createEl('p', {
      class: 'card-title',
      inner: product.describe,
    });
    let price = createEl('p', {
      class: 'card-title',
      inner: `ราคา : ${product.price} บาท`,
    });
    let remain = createEl('p', {
      class: 'card-title',
      inner: `คงเหลือ : ${product.remainInStock} จำนวน`,
    });
    let divAddToCart = createEl('div', {
      class: 'd-flex justify-content-center',
    });

    let btnAddToCart =
      product.remainInStock > 0
        ? createEl('div', {
            class: 'btn btn-dark rounded-0 text-center',
            inner: 'เพิ่มลงตะกร้าสินค้า',
          })
        : createEl('div', {
            class: 'btn btn-dark rounded-0 text-center disabled',
            inner: 'สินค้าหมด',
          });
    btnAddToCart.addEventListener('click', addToCart);

    // insert childs
    divAddToCart.appendChild(btnAddToCart);

    let cardBodyChilds = [sushiName, describe, price, remain, divAddToCart];
    appendManyChilds(cardBody, ...cardBodyChilds);

    let cardChilds = [img, cardBody];
    appendManyChilds(card, ...cardChilds);

    col.appendChild(card);
    productDiv.appendChild(col);
  });
}

renderProduct(prodData);

// show hide SearchArea function
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
// add eventlistener to toggleBtn
document
  .getElementById('toggleBtn')
  .addEventListener('click', toggleSearchArea);

// filter product by name
function findProductByName(name) {
  return prodData.filter((product) =>
    product.name.toLowerCase().includes(name)
  );
}

function searchName() {
  let name = document.getElementById('searchInput').value;
  let filerName = findProductByName(name);
  renderProduct(filerName);
}

document.getElementById('searchBtn').addEventListener('click', searchName);

function addToCart(e) {
  console.log(e);
}
