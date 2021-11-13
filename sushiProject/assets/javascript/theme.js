function toggleThemeMode() {
    let body = document.getElementsByTagName("body")[0];
    
    if (body.setAttribute('class','bg-light')) {
        body.setAttribute('class','bg-dark')
      
    } else if(body.setAttribute('class','bg-dark')) {
        body.setAttribute('class','bg-light')
    }
}

let themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click',toggleThemeMode);