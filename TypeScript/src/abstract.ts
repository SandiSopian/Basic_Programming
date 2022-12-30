// abstract
// sebuah class yang tidak bisa di instansiasi oleh parent class itu sendiri melainkan harus di extend dulu ke child class lainnya

// parent class
abstract class Vehicle {
  abstract wheels: number;

  starter(): void {
    console.log("brummm!");
  }
}

// child class
class Car extends Vehicle {
  wheels: number = 4;
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log("car.wheels");
car.starter();

let motorcycle = new Motorcycle();
console.log("motorcycle.wheels");
motorcycle.starter();
