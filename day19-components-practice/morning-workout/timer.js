class Timer {
    constructor (value) {
        this.value = value;
    }

    increment () {
        if (this.value < 60) {
            timeButton();
            this.value++;
        }
    }

    decrement () {
        if (this.value > 0 ) {
            timeButton();
            this.value --;
        }
    }

    render () {
        this.element = document.createElement('div');
        this.element.className = 'timer';
        this.element.innerHTML = (
            `<div class="circle" id="reset">reset</div>

            <div class="middle">
            <div class="arrow-up" id="top"></div>
            
            <span class="time" id="time">${value}</span>
            
            <div class="arrow-down" id="bottom"></div>
            </div>
            <div class="circle" id="start">start</div>`
        );
        let intervalID = null;

        const top = this.element.querySelector('#top');
        top.addEventListener('click', () => {
           this.increment();
        });
    
        const bottom = this.element.querySelector('#bottom');
        bottom.addEventListener('click', () => {
            this.decrement();
        });
    
        const start = this.element.querySelector('#start');
        start.addEventListener('click', () => {
            intervalID = setInterval(frame, 1000);
        });
    
        const reset = this.document.querySelector('#reset');
        reset.addEventListener('click', () => {
           if (value > 0 ) {
               value = 0;
               timeButton();
           }
        });

        this.timeButton();
    }

    timeButton () {
            const time = this.element.querySelector('#time');
            time.textContent = `${this.value}`;
            };
    }

    frame () { 
            if (this.value > 0 ) {
                this.value --;
            this.timeButton();
            } else {
                clearInterval(intervalID);
            };
        };
    }









}