
const timer = new Timer(20);

const timeButton = () => {
    const time = document.querySelector('#time');
    time.textContent = `${timer.value}`;
    
    const start = document.querySelector('#start');
    if (timer.intervalID === null) {
        start.textContent = 'start'
    } else {
        start.textContent = 'stop'
    }
}
      
document.addEventListener('DOMContentLoaded', () => {
timeButton();


    const top = document.querySelector('#top');
    top.addEventListener('click', () => {
     timer.increment();
     timeButton();
    });

    const bottom = document.querySelector('#bottom');
    bottom.addEventListener('click', () => {
      timer.decrement();
      timeButton();
    });

    const start = document.querySelector('#start');
    start.addEventListener('click', () => {
        if (timer.intervalID === null) {
            timer.intervalID = setInterval( ()=>{
                timer.frame()
                timeButton()}, 1000)
        } else {
            timer.clear();
            timeButton();
        }
    });

    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        timer.reset();
        timeButton();
    });
});