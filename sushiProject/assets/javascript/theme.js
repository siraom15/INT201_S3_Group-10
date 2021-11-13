let Theme = {
  isDarkMode: false,
  toggle: function () {
    // toggle
    let body = document.getElementsByTagName('body')[0];
    if (body.setAttribute('class', 'bg-light')) {
      body.setAttribute('class', 'bg-black');
    } else if (body.setAttribute('class', 'bg-black')) {
      body.setAttribute('class', 'bg-light');
    }
  },
  load: function () {
    // load setting from cookie
  },
  save: function () {
    // save setting to cookie
  },
};

let themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', (e) => {
  Theme.toggle();
});

export default Theme;
