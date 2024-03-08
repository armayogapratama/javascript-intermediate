"use strict";
// import the parent class here
const { Vehicle, Customer } = require("./index");

// Initialize a class Car from Vehicle here
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand, model, 300000);
  }

  rent() {
    if (this.condition >= 0) {
      for (let i = 0; i < 15; i++) {
        this.customers.push(new CarCustomer());
      }
    }
  }
}

// Initialize a class CarCustomer from Customer here
class CarCustomer extends Customer {}

const yoga = new CarCustomer();
// console.log(yoga);

const newCar = new Car("Toyota", "Camry");
// console.log(newCar);
// newCar.increasingAge();
// console.log(newCar);
// console.log(newCar.condition);
// newCar.rent();
// console.log(newCar);
// console.log(newCar.rent());

// Driver code.
let car = new Car("Toyota", "Camry"); // create Instance from the vehicle above in a variable `Car`
car.age = 5;
console.log("Car rental is open! :smile:");
do {
  car.increasingAge();
  car.rent();
  car.calculate();
  console.log(
    `[Age ${car.age} Report] Condition = ${car.condition}% | ${car.report}`
  );
  car.resetReport();
} while (car.condition > 0);

console.log("The car has met its end. :sad:");
