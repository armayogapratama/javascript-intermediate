"use strict";

class Vehicle {
  #condition;
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.#condition = 100;
    this.age = 0;
    this.customers = [];
    this.totalRentDays = 0;
    this.totalRentCost = 0;
  }

  get condition() {
    return this.#condition;
  }

  set condition(conditionStartOfCar) {
    this.#condition = conditionStartOfCar;
  }

  increasingAge() {
    let decreaseConditionOfVehicle = Math.floor(Math.random() * 30) + 1;
    // console.log(decreaseConditionOfVehicle);
    if (this.#condition <= 100) {
      this.#condition -= decreaseConditionOfVehicle;
      this.age++;
    }

    if (this.#condition <= 0) {
      this.#condition = 0;
    }
  }

  rent() {
    if (this.#condition >= 0) {
      const customersData = Math.floor(Math.random() * 16) + 5;
      // console.log(customersData);
      for (let i = 0; i < customersData; i++) {
        this.customers.push(new Customer());
      }
    }
  }

  calculate() {
    this.totalRentDays += this.customers.length;
    // console.log(this.customers.length);
    this.totalRentCost += this.price * this.totalRentDays;
    // console.log(this.totalRentCost);
  }

  get report() {
    let totalGood = 0;
    let totalBad = 0;

    this.customers.filter(function (value) {
      const result = value.review === "good" ? totalGood++ : totalBad++;
      return result;
    });
    // console.log(totalGood);
    // console.log(totalBad);
    return `total rent days: ${this.totalRentDays}, total rent cost: ${this.totalRentCost}, reviews: ${this.customers.length}(${totalGood} good, ${totalBad} bad)`;
  }

  resetReport() {
    this.totalRentDays = 0;
    this.totalRentCost = 0;
    this.customers = [];
  }
}

class Customer {
  constructor() {
    this.review = this.reviewOfCustomer();
  }

  reviewOfCustomer() {
    let randomIndex = Math.floor(Math.random() * 4);
    // console.log(randomIndex);
    const result = randomIndex === 0 ? "bad" : "good";

    return result;
  }
}

// Driver code untuk Vehicle.
// ====================================== RELEASE 0 ======================================
const vehicle = new Vehicle("Toyota", "Camry", 200000);
// console.log(vehicle);
// console.log(vehicle.increasingAge());
/* 
Vehicle {
  brand: 'Toyota',
  model: 'Camry',
  price: 200000,
  age: 0,
  customers: [],
  totalRentDays: 0,
  totalRentCost: 0
}
*/

// console.log(vehicle.condition); // 100 (ingat ini private property)
// console.log(vehicle.age); // 0

// ====================================== RELEASE 1 ======================================
// (uncomment the code below to test)
// vehicle.increasingAge();
// console.log(vehicle);
/*
Vehicle {
  brand: 'Toyota',
  model: 'Camry',
  price: 200000,
  age: 1,
  customers: [],
  totalRentDays: 0,
  totalRentCost: 0
}
*/

// ====================================== RELEASE 2 ======================================
// (uncomment the code below to test)
// let zainuddin = new Customer();
// let hayati = new Customer();

// console.log(zainuddin);
/*
Customer { review: 'good' }
*/
// console.log(hayati);
/*
Customer { review: 'bad' }
*/

// ====================================== RELEASE 3 ======================================
// (uncomment the code below to test)
// vehicle.rent();
// console.log(vehicle);
// console.log(vehicle.rent());

/*
Vehicle {
  brand: 'Toyota',
  model: 'Camry',
  price: 200000,
  age: 0,
  customers: [
    Customer { review: 'bad' },
    Customer { review: 'good' },
    Customer { review: 'good' },
    ...
  ],
  totalRentDays: 0,
  totalRentCost: 0
}
*/

/**
 * QUESTION :
 * What type of relationship is held by the classes Vehicle and Customer?
 * [type your answer here]
 * Aggregation
 */

// ====================================== RELEASE 4 ======================================
// (uncomment the code below to test)

// checking before 'rent' & 'calculate' method is invoked (sebelum method rent dan calculate dipanggil)
// console.log(vehicle.report); // total rent days: 0, total rent cost: 0, reviews: 0(0 good, 0 bad)
// console.log(vehicle.customers); // []

// The 'rent' method is called based on random results. (method rent dipanggil sesuai hasil random)
// vehicle.rent();

// 'calculate' is called to count the report
// vehicle.calculate();
// console.log(vehicle.report); // total rent days: 13, total rent cost: 2600000, reviews: 13(10 good, 3 bad)

// console.log(vehicle.customers);
/*
[
    Customer { review: 'good' },
    Customer { review: 'good' },
    Customer { review: 'bad' },
    ...
]
*/

// vehicle.resetReport();
// console.log(vehicle.report); // total rent days: 0, total rent cost: 0, reviews: 0(0 good, 0 bad)
// console.log(vehicle.customers); // []

// ====================================== RELEASE 5 ======================================
// (uncomment the code below to test)

// const vehicle = new Vehicle("Toyota", "Camry", 200000);

// console.log("Vehicle rental is open! :smile:");
// do {
//   vehicle.increasingAge();
//   vehicle.rent();
//   vehicle.calculate();
//   console.log(
//     `[Age ${vehicle.age} Report] Condition = ${vehicle.condition}% | ${vehicle.report}`
//   );
//   vehicle.resetReport();
// } while (vehicle.condition > 0);

// console.log("The vehicle has met its end. :sad:");

module.exports = { Vehicle, Customer };
