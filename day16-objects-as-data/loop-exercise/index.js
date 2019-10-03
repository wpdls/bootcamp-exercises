const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

// console.log(numbers);

// for (const number of numbers) {
//     console.log(number * number)
// }

// for (let i = 0; i < numbers.length-1; i++) {
//     if (numbers [i] < 0 ) {
//     console.log(numbers[i]);
//     }
// }

//7
// const absoluteNumbers = (numbers.forEach(number => {
//     if (number < 0) {
//         console.log(Math.abs(number));
//     } else {
//         console.log(number);
//     }
//  }))

//8
const divisibleThree = (numbers.forEach (number => {
    if (number < 0  && number % 3 === 0) {
        console.log(Math.abs(number));
    } else (number % 3 === 0) 
        console.log(number);
    
}))

