let numOne = document.querySelector('#num-one');
let numTwo = document.querySelector('#num-two');
let addSum = document.querySelector('#add-sum');

const add = () => {
    let one = parseFloat(numOne.value) || 0;
    let two = parseFloat(numTwo.value) || 0;
    let sum = one + two;
    addSum.innerHTML = 'your sum is: ' + sum;
}

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);


