import { products as prodData } from "./product.js";

function createImgWithUrl(url) {
    let img = document.createElement("img");
    img.setAttribute("src", url)
    img.setAttribute("height", "150px")
    return img
}

function createElWithClassInnerStyle(elName, className = undefined, inner = undefined, style = undefined) {
    let el = document.createElement(elName);
    className ? el.setAttribute("class", className) : null;
    style ? el.setAttribute("style", style) : null;
    inner ? el.innerHTML = inner : null;
    return el;
}
function appendManyChilds(parent,childs=[]){
    childs.forEach(e=>parent.appendChild(e));
}

let productDiv = document.getElementById("products");

prodData.forEach(e => {
    let col = createElWithClassInnerStyle("div", "col-xs-12 col-md-6 col-lg-4 col-xl-4");
    let card = createElWithClassInnerStyle("div", "card shadow-sm text-center", "", "width: 18rem;");
    let img = createImgWithUrl(`./assets/images/${e.pictureName}`);
    let cardBody = createElWithClassInnerStyle("div", "card-body");
    let sushiName = createElWithClassInnerStyle("h5", "card-title", e.name);
    let describe = createElWithClassInnerStyle("p", "card-title", e.describe);
    let price = createElWithClassInnerStyle("p", "card-title", `ราคา : ${e.price} บาท`);
    let remain = createElWithClassInnerStyle("p", "card-title", `คงเหลือ : ${e.remainInStock} จำนวน`);
    let divAddToCart = createElWithClassInnerStyle("div", "d-flex justify-content-center");
    let btnAddToCart = createElWithClassInnerStyle("a", "btn btn-dark rounded-0 text-center", "เพิ่มลงตะกร้าสินค้า")

    divAddToCart.appendChild(btnAddToCart);

    let cardBodyChilds = [sushiName, describe, price, remain, divAddToCart];
    appendManyChilds(cardBody,cardBodyChilds);
   
    let cardChilds = [img, cardBody];
    appendManyChilds(card,cardChilds);

    col.appendChild(card);
    productDiv.appendChild(col);
})