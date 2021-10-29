function cookieToObj(cookieStr) {
    let cookieObj = {}
    if(!cookieStr) return cookieObj;
    cookieStr.split(";").forEach(e => {
        console.log(e);
        let [key, val] = e.trim().split("=");
        cookieObj[key] = val
    })
    return cookieObj;
}
function objToCookie(cookieObj) {
    let cookieStr = "";
    for (const key in cookieObj) {
        cookieStr += `${key}=${JSON.stringify(cookieObj[key])};`
    }
    return cookieStr;
}
let cookie = document.cookie;
let cookieObj = cookieToObj(cookie)
console.log(cookieObj);
cookieObj.cart = cookieObj.cart || []  ;

function addToCart(id, quantity = 1) {
    let cartIndex = cookieObj.cart.findIndex(e => e.id == id);
    if (cartIndex != -1) {
        cookieObj.cart[cartIndex].quantity += quantity;
    } else {
        cookieObj.cart.push({ id, quantity });
    }
    console.log(cookieObj.cart);
    updateCartToCookie()
}

function removeFromCart(id) {
    cookieObj.cart.filter(e => e.id != id);
}

function updateCartToCookie() {
    objToCookie(cookieObj).split(";").forEach(e=>document.cookie=e);
}