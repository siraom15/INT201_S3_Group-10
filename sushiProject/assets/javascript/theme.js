// const Darkmode = document.getElementById('themeBtn');
// var searchBtn = document.getElementById("searchBtn");
// var toggleBtn = document.getElementById("toggleBtn");
// Darkmode.addEventListener('click', ()=>{
//   document.body.classList.toggle('dark');
//   toggleBtn.classList.toggle('btn-light');
//   searchBtn.classList.toggle('btn-light');
// })
import CookieUtil from './cookieUtil.js';

let Theme = {
  isDarkMode: false,
  init: function () {
    this.loadCookie();
    this.render();
  },
  toggle: function () {
    this.isDarkMode = !this.isDarkMode;
    this.saveCookie();
    this.render();
  },
  loadCookie: function () {
    this.isDarkMode = JSON.parse(CookieUtil.get('darkmode'));
  },
  saveCookie: function () {
    CookieUtil.set('darkmode', this.isDarkMode);
  },
  render: function () {
    let searchBtn = document.getElementById('searchBtn');
    let toggleBtn = document.getElementById('toggleBtn');
    let cartBtn = document.getElementById('cartBtn');
    let themeBtn = document.getElementById('themeBtn');
    let body = document.body;
    let card = document.getElementsByClassName('card');
    let navbar = document.getElementById('navbar');
    let cartModal = document.getElementById('cartModal');

    if (this.isDarkMode) {
      body.classList.add('bg-dark');

      navbar.classList.remove('navbar-light', 'bg-light', 'text-dark');
      navbar.classList.add('navbar-dark', 'bg-dark', 'text-white');

      toggleBtn.classList.remove('btn-outline-dark');
      toggleBtn.classList.add('btn-outline-light');

      searchBtn.classList.remove('btn-outline-dark');
      searchBtn.classList.add('btn-outline-light');

      cartBtn.classList.remove('btn-outline-dark');
      cartBtn.classList.add('btn-outline-light');

      themeBtn.classList.remove('btn-outline-dark');
      themeBtn.classList.add('btn-outline-light');
    } else {
      body.classList.remove('bg-dark');

      navbar.classList.add('navbar-light', 'bg-light', 'text-dark');
      navbar.classList.remove('navbar-dark', 'bg-dark', 'text-white');

      toggleBtn.classList.add('btn-outline-dark');
      toggleBtn.classList.remove('btn-outline-light');

      searchBtn.classList.add('btn-outline-dark');
      searchBtn.classList.remove('btn-outline-light');

      cartBtn.classList.add('btn-outline-dark');
      cartBtn.classList.remove('btn-outline-light');

      themeBtn.classList.add('btn-outline-dark');
      themeBtn.classList.remove('btn-outline-light');
    }
  },
};

const DarkmodeBtn = document.getElementById('themeBtn');

DarkmodeBtn.addEventListener('click', (e) => {
  Theme.toggle();
});

export default Theme;

