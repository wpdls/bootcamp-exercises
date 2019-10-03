// const grocery = [
//     { name: 'apple', amount: '1kg'},
//     { name: 'banana', amount: '1kg'},
//     { name: 'pineappe', amount: '2'},
//     { name: 'milk', amount: '1 jug'},
//     { name: 'bread', amount: '2 loaves'}
// ];
    
// const newlistName = prompt ('what item would you like to add');
// const newlistAmount = prompt ('what amount would you like to add');
// const newList = {name: newlistName, amount: newlistAmount};
// console.log(newList);

//     grocery.push(newList);


// document.addEventListener('DOMContentLoaded', () => {
//     const list = document.querySelector('.list');

//     for (const items of grocery) {
//         const html = (`<div class="list__item">
//         <span>${items.name}</span>
//         <span>${items.amount}</span>
//         </div>`);

//         list.innerHTML += html;
//     }
// });


// const book = {
//     title: 'Harry Potter', 
//     author: 'J.K Rowling',
//     pages: 1023,
//     publishyear: 2003,

// }


//working with arrays
// array = [3, 5, 6, 8, 2, 7, 2, 1, 8]

const len = (array) => {
    console.log(array.length);
}

const last = (array) => {
    if (array === undefined || array.length == 0) {
        console.log(null); 
    } else {
        console.log(array[array.length-1]);
    }
};


const butlast = (array) => {
    if (array.length < 2) {
        console.log(null);
    } else {
        console.log(array[array.length-2])
    }
}


const elementAt = (array, element) => {
    if (element > array.length) {
        console.log(null);
    } else {
        console.log(array[element-1]);
    }
};

const reverse = (array) => {
    const arrayReverse = [];
    for (let i = array.length-1; i >= 0; i--) {
    arrayReverse.push(array[i]);
    //console.log(arrayReverse);
    //console.log(i);
    };
    return arrayReverse;
    //console.log(array);
};

const isPalindrome = (array) => {
    
    arrayRev = reverse(array);
    console.log(arrayRev);
    console.log(array);
    
    if (array === arrayRev) {
        console.log('it is a palindrome');
    } else {
        console.log('it is not');
    }
};