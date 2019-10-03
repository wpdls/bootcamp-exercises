class Timer {

    constructor (value) {
        this.value = value;
        this.intervalID = null;
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
        timeButton();
        } else {
            this.clear();
        }
    }


}