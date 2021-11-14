const Darkmode = document.getElementById('themeBtn');
var searchBtn = document.getElementById("searchBtn");
var toggleBtn = document.getElementById("toggleBtn");
Darkmode.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  toggleBtn.classList.toggle('btn-light');
  searchBtn.classList.toggle('btn-light');
})
// let Theme = {
//   isDarkMode: false,
//   toggle: function () {
//     // toggle
//     let body = document.getElementsByTagName('body')[0];
//     if (body.setAttribute('class', 'bg-light')) {
//       body.setAttribute('class', 'bg-black');
//     } else if (body.setAttribute('class', 'bg-black')) {
//       body.setAttribute('class', 'bg-light');
//     }
//   },
//   loadCookie: function () {
//     // load setting from cookie
//   },
//   saveCookie: function () {
//     // save setting to cookie
//   },
// };

// let themeBtn = document.getElementById('themeBtn');
// themeBtn.addEventListener('click', (e) => {
//   Theme.toggle();
// });

// export default Theme;
