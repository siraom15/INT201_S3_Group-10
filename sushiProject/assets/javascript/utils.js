export function createEl(elName, attributes) {
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

export function appendManyChilds(parent, ...childs) {
  childs.forEach((e) => parent.appendChild(e));
}

export function findProductByName(products, name) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(name)
  );
}
export function findProductById(products, id) {
  return products.filter((product) => product.id === id);
}
