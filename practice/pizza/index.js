// function myFunction(x) {
//     x.classList.toggle("change");
//   }

let container = document.querySelector('.container');
const change = (x) => {
    container.classList.toggle('change');
}
container.addEventListener('click', change);


// let menu = document.querySelector('#frontpage');

// container.addEventListener('click', (menu) => {
//     if (!menu.target.matches('open')) {
//         menu.style.width = "100%";
//     } else {
//         menu.style.width = "0%";
//     }
// });

const menu = document.querySelector('#menu');
menu.addEventListener('mouseenter', () => {
  menu.classList.remove('closed');
});

menu.addEventListener('mouseleave', () => {
  menu.classList.add('closed');
});

