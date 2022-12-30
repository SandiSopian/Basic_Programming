"use strict";
// abstract
// sebuah class yang tidak bisa di instansiasi oleh parent class itu sendiri melainkan harus di extend dulu ke child class lainnya
// parent class
class Vehicle {
    starter() {
        console.log("brummm!");
    }
}
// child class
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log("car.wheels");
car.starter();
let motorcycle = new Motorcycle();
console.log("motorcycle.wheels");
motorcycle.starter();
