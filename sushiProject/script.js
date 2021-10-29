import { products as prodData } from "./product.js";

function createImgWithUrl(url) {
    let img = document.createElement("img");
    img.setAttribute("src", url)
    img.setAttribute("height","150px")
    return img
}

function createElWithClassInnerStyle(elName, className, inner = null, style = "") {
    let el = document.createElement(elName);
    el.setAttribute("class", className);
    el.setAttribute("style",style)
    el.innerHTML = inner
    return el;
}

let productDiv = document.getElementById("products");

prodData.forEach(e => {
    let col = createElWithClassInnerStyle("div", "col-xs-12 col-md-6 col-lg-4 col-xl-4");
    let card = createElWithClassInnerStyle("div", "card shadow-sm text-center","","width: 18rem;");
    let img = createImgWithUrl(`./assets/images/${e.pictureName}`);
    let cardBody = createElWithClassInnerStyle("div", "card-body");
    let sushiName = createElWithClassInnerStyle("h5", "card-title", e.name);
    let describe = createElWithClassInnerStyle("p", "card-title", e.describe);
    let price = createElWithClassInnerStyle("p", "card-title", `ราคา : ${e.price} บาท`);
    let remain = createElWithClassInnerStyle("p", "card-title", `คงเหลือ : ${e.remainInStock} จำนวน`);
    let divAddToCart = createElWithClassInnerStyle("div", "d-flex justify-content-center");
    let btnAddToCart = createElWithClassInnerStyle("a", "btn btn-dark rounded-0 text-center", "เพิ่มลงตะกร้าสินค้า")

    divAddToCart.appendChild(btnAddToCart)

    cardBody.appendChild(sushiName);
    cardBody.appendChild(describe);
    cardBody.appendChild(price);
    cardBody.appendChild(remain);
    cardBody.appendChild(divAddToCart)

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);
    productDiv.appendChild(col);
})