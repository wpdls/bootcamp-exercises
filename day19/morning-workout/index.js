let intervalID = null;
let value = 30;

const timeButton = () => {
    const time = document.querySelector('#time');
    time.textContent = `${value}`;
    };

const frame = () => { 
    if (value > 0 ) {
        value --;
    timeButton();
    } else {
        clearInterval(intervalID);
    };
};



// const timeStart = () => {
//     const frame = () => { 
//         if (value >= 0 ) {
//         timeButton();
//         value --;
//     };
    
// };
// };

document.addEventListener('DOMContentLoaded', () => {
timeButton();

    const top = document.querySelector('#top');
    top.addEventListener('click', () => {
        if (value < 60 ) {
            timeButton();
            value++;
        }
    });

    const bottom = document.querySelector('#bottom');
    bottom.addEventListener('click', () => {
        if (value > 0 ) {
            timeButton();
            value --;
        }
    });

    const start = document.querySelector('#start');
    start.addEventListener('click', () => {
        intervalID = setInterval(frame, 1000);
    });

    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
       if (value > 0 ) {
           value = 0;
           timeButton();
       }
    });

});