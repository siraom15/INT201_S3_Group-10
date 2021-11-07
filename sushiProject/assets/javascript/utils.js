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
