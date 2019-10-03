
let result = 0;
const dice = document.querySelector('#dice-side');
const click = document.querySelector('#click');

const array = ['/src/img/side1.png', '/src/img/side2.png', '/src/img/side3.png', '/src/img/side4.png', '/src/img/side5.png', '/src/img/side6.png'];

const rollDice = () => {
    dice.src = array[result];
    result++;

        if (result === 6) {
            result = 0
        }
}

const rollDiceRandom = () => {
    dice.src = array[Math.floor(Math.random()* array.length )];
    result++;

//         if (result === 6) {
//             result = 0
//         }
}

click.addEventListener ('click', rollDiceRandom);


// const names = ['Jayne', 'Adi', 'Runi', 'Bob', 'John', 'Stacey'];
// const password = [123, 234, 345, 456, 567, 568];

// username = prompt ('what is your username');
// pass = prompt ('what is your password');

// // if (names.includes(username)) {
// //     alert ('welcome');
// // }

// if (username.includes(names[0]) && pass.includes(password[0])) {
//     alert ('password correct');
// }
// if (username.includes(names[1]) && pass.includes(password[1])) {
//     alert ('password correct');
// }
// if (username.includes(names[2]) && pass.includes(password[2])) {
//     alert ('password correct');
// }
// if (username.includes(names[3]) && pass.includes(password[3])) {
//     alert ('password correct');
// }
// if (username.includes(names[4]) && pass.includes(password[4])) {
//     alert ('password correct');
// }
// if (username.includes(names[5]) && pass.includes(password[5])) {
//     alert ('password correct');
// }
// else {
//     alert ('go away');
// }




