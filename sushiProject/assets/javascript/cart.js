import { createEl, appendManyChilds } from './utils.js';
import Product from './product.js';
import CookieUtil from './cookieUtil.js';

let Cart = {
  currentCart: [],
  getCart: function () {
    return this.currentCart;
  },
  add: function (e) {
    let product_id = e.target.id;

    let [resultProduct] = Product.findById(product_id);

    if (resultProduct && resultProduct.remainInStock > 0) {
      let index = this.findIndexByProductId(product_id);
      if (index !== -1) {
        this.currentCart[index].quantity++;
      } else {
        let newCartItem = {
          product: resultProduct,
          quantity: 1,
        };
        this.currentCart.push(newCartItem);
      }
    }
    this.render();
  },
  deleteAll: function () {
    this.currentCart = [];
  },
  getTotalPrice: function () {
    return this.currentCart.reduce((prev, curr) => {
      let price = curr.product.price * curr.quantity;
      return prev + price;
    }, 0);
  },
  findIndexByProductId: function (product_id) {
    return this.currentCart.findIndex(
      (cartItem) => cartItem.product.id === product_id
    );
  },
  getCountItem: function () {
    return this.currentCart.reduce((prev, curr) => prev + curr.quantity, 0);
  },
  render: function () {
    // Update Cart Item number
    let numberCartItem = document.getElementById('numberCartItem');
    numberCartItem.innerText = this.getCountItem();

    let cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    if (!this.currentCart.length) {
      let p = createEl('p', {
        class: 'text-center',
        inner: 'ไม่มีรายการสินค้าในตะกร้า',
      });
      cartDiv.appendChild(p);
      return;
    }
    this.currentCart.forEach((cartItem) => {
      let row = createEl('div', {
        class: 'row m-1',
      });

      let col1 = createEl('div', {
        class: 'col-sm-12 col-md-3 col-lg-3',
      });

      let img = createEl('img', {
        class: 'rounded d-block',
        src: `./assets/images/${cartItem.product.pictureName}`,
        width: '100px',
      });

      let col2 = createEl('div', {
        class: 'col-sm-12 col-md-2 col-lg-2',
      });

      let p = createEl('p', {
        class: 'text-break',
        inner: cartItem.product.name,
      });

      let col3 = createEl('div', {
        class: 'col-sm-12 col-md-2 col-lg-2',
      });

      let span1 = createEl('span', {
        inner: `จำนวน ${cartItem.quantity} ชิ้น`,
      });

      let col4 = createEl('div', {
        class: 'col-sm-12 col-md-3 col-lg-3',
      });

      let span2 = createEl('span', {
        inner: `ราคา ${cartItem.quantity * cartItem.product.price} บาท`,
      });

      let col5 = createEl('div', {
        class: 'col-2',
      });

      // let btn = createEl('div', {
      //   class: 'btn btn-danger btn-sm rounded-0',
      //   inner: 'ลบ',
      // });

      let hr = createEl('hr', {
        class: 'mt-2',
      });

      col1.appendChild(img);
      col2.appendChild(p);
      col3.appendChild(span1);
      col4.appendChild(span2);
      // col5.appendChild(btn);

      let rowChilds = [col1, col2, col3, col4, col5, hr];

      appendManyChilds(row, ...rowChilds);

      cartDiv.appendChild(row);
    });

    let row = createEl('div', {
      class: 'row m-1',
    });

    let col1 = createEl('div', {
      class: 'col-12 justify-content-end text-end',
    });

    let deleteAllBtn = createEl('button', {
      class: 'btn btn-danger rounded-0 mb-3',
      inner: 'ลบทั้งหมด',
    });
    //Delete all product in cart
    deleteAllBtn.addEventListener('click', event => {
      this.deleteAll();
    });

    let p = createEl('p', {
      inner: `ราคาทั้งหมด : ${this.getTotalPrice()} บาท`,
    });

    let col1Childs = [deleteAllBtn, p];
    appendManyChilds(col1, ...col1Childs);
    row.appendChild(col1);
    cartDiv.appendChild(row);
  },
};

let cartBtn = document.getElementById('cartBtn');
cartBtn.addEventListener('click', (e) => {
  Cart.render();
});

export default Cart;
