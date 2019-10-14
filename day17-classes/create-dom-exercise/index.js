
// const object = [
//     {name: 'candy', price: '$3', quantity: 2},
//     {name: 'computer', price: '$100', quantity: 1},
//     {name: 'book', price: '$1', quantity: 11},
//     {name: 'water', price: '$2', quantity: 2},
//     {name: 'phone', price: '$80', quantity: 1},
//     {name: 'pencil', price: '$4', quantity: 6},
//     {name: 'cup', price: '$6', quantity: 4}
// ]

class Object {
    constructor (name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
}
    sell () {
        return this.quantity - 1;
    }
    store (count) {
        return this.quantity += count;
    }
}

const object = [
    new Object ('candy', '$3', 2),
    new Object ('computer', '$100', 1),
    new Object ('book', '$1', 11),
    new Object ('water', '$2', 2),
    new Object ('phone', '$80', 1),
    new Object ('pencil', '$4', 6),
    new Object ('cup', '$6', 4),
]

// document.addEventListener('DOMContentLoaded', () => {
//     const eshop = document.querySelector('.eshop');

//     for (const item )
// })

class Bus {
    constructor (direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
    }
    current () {
        return this.stations[this.last_station];
    }
    next () {
         this.last_station++;
        //  console.log(this.stations[this.last_station]);
         
    }
    board (count) {
        const freeSeats = this.seats - this.passengers;
        if (freeSeats >= count) {
         this.passengers += count;
        } else {
            this.passengers += freeSeats;
        }
    }
    unboard (count) {
        if (count <= this.passengers) {
            this.passengers -= count;
        } else {
            this.passengers - this.passengers;
        }
    }
}

const bus = [
    b1 = new Bus ('Vienna', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 10, 3, 0),
    b2 = new Bus ('Prague', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 30, 10, 3),
];
