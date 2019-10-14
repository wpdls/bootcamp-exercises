class Timer {

    constructor (value) {
        this.value = value;
        this.intervalID = null;
    }

    increment () {
        if (this.value < 60) {
            this.timeButton();
            this.value++;
        }
    }

    decrement () {
        if (this.value > 0 ) {
            this.timeButton();
            this.value --;
        }
    }

    reset () {
      
        this.value = 0;        
    }
    clear () {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    frame () {
        if (this.value > 0 ) {
            this.value --;
        this.timeButton();
        } else {
            this.clear();
        }
    }

    render () {
        this.element = document.createElement ('div');
        this.element.className = 'timer';
        this.element.innerHTML = (
            `<div class="circle" id="reset">reset</div>

            <div class="middle">
            <div class="arrow-up" id="top"></div>
            
            <span class="time" id="time">${this.value}</span>
            
            <div class="arrow-down" id="bottom"></div>
            </div>
            <div class="circle" id="start">start</div>`
        );
        
        const top = this.element.querySelector('#top');
        top.addEventListener('click', () => {
        this.increment();
        this.timeButton();
        });

        const bottom = this.element.querySelector('#bottom');
        bottom.addEventListener('click', () => {
        this.decrement();
        this.timeButton();
        });

        const start = this.element.querySelector('#start');
        start.addEventListener('click', () => {
            if (this.intervalID === null) {
                this.intervalID = setInterval( ()=>{
                    this.frame()
                    this.timeButton()}, 1000)
            } else {
                this.clear();
                this.timeButton();
            }
        });

        const reset = this.element.querySelector('#reset');
        reset.addEventListener('click', () => {
            this.reset();
            this.timeButton();
        });

        this.timeButton();
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }


    timeButton () {
        const time = this.element.querySelector('#time');
        time.textContent = `${this.value}`;
        
        const start = this.element.querySelector('#start');
        if (this.intervalID === null) {
            start.textContent = 'start'
        } else {
            start.textContent = 'stop'
        }
    }
}