const shoppingList = [
  ['apples', '1kg'],
  ['bacon', '200g'],
  ['cheddar', '250g'],
  ['beer', '6'],
  ['icecream', '1kg'],
];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.shopping-list');
 
  for (const item of shoppingList) {
    const listElm = document.createElement('div');
    listElm.className = 'shopping-list__item';
    listElm.innerHTML = (
      ` <span>${item[0]}</span>
        <span>${item[1]}</span>
        <input type="checkbox" class="btn">
      `
    );

    listElm.querySelector('.btn').addEventListener('click', (event) => {
      if (item[2]) {
        item[2] = false;
      } else {
        item[2] = true;
      }
    });

    list.appendChild(listElm);
  }
});