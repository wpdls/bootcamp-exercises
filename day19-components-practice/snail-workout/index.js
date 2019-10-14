let intervalID = null;
let position = 5;

const update = () => {
  const snail = document.querySelector('.snail-racer');
  snail.style.marginLeft = `${position}rem`; 

  const start = document.querySelector('.start');
  if (intervalID === null) {
    start.textContent = 'start'
  } else {
    start.textContent = 'stop'
  }
}

const move = () => {
  if (position > 0) {
    update();
    position++;
    
  }
}

console.log(move);

document.addEventListener('DOMContentLoaded', () => {
  // update();

    const start = document.querySelector('.start');
    start.addEventListener('click', () => {
      if (intervalID === null) {
        intervalID = setInterval(move, 1000);

      
      // intervalID = setInterval(move, 500)

    }});
  
    // update();

  });