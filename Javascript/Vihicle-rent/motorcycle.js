"use strict";
// import the parent class here
const { Vehicle, Customer } = require("./index");

// Initialize a class Motorcycle from Vehicle here
class Motorcycle extends Vehicle {
  constructor(brand, model, frameType = "Tubular Frame") {
    super(brand, model, 100000);
    this.frameType = frameType;
  }

  increasingAge() {
    let decreaseConditionOfMotorcycle = Math.floor(Math.random() * 31) + 10;
    // console.log(decreaseConditionOfMotorcycle);

    if (this.condition <= 100) {
      this.condition -= decreaseConditionOfMotorcycle;
      this.age++;
    }

    if (this.condition <= 0) {
      this.condition = 0;
    }
  }

  rent() {
    if (this.condition >= 0) {
      const customersData = Math.floor(Math.random() * 16) + 5;
      // console.log(customersData);
      for (let i = 0; i < customersData; i++) {
        this.customers.push(new MotorcycleCustomer());
      }
    }
  }
}

// Initialize a class MotorcycleCustomer from Customer here
class MotorcycleCustomer extends Customer {}

const aray = new MotorcycleCustomer();
// console.log(aray);

const newMotorcycle = new Motorcycle("Honda", "CBT-150");

// console.log(newMotorcycle);
// newMotorcycle.increasingAge();
// console.log(newMotorcycle);
// console.log(newMotorcycle.condition);
// newMotorcycle.rent();
// console.log(newMotorcycle);
// console.log(newMotorcycle.rent());

// Driver code.
let motorcycle = new Motorcycle("Honda", "CBT-150"); // create Instance from the vehicle above in a variable `Motorcycle`
motorcycle.condition = 95;
motorcycle.frameType = "Double-Cradle Frame";
// console.log(motorcycle);
console.log("Motorcycle rental is open! :smile:");
do {
  motorcycle.increasingAge();
  motorcycle.rent();
  motorcycle.calculate();
  console.log(
    `[Age ${motorcycle.age} Report] Condition = ${motorcycle.condition}% | ${motorcycle.report}`
  );
  motorcycle.resetReport();
} while (motorcycle.condition > 0);

console.log("The motorcycle has met its end. :sad:");
