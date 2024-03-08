"use strict";

// execute Calculator in here
const newCalculator = require("./calculator");
// console.log(newCalculator);

const calculator = new newCalculator(10);
// console.log(calculator);

const calculatorCount = calculator
  .add(10)
  .subtract(16)
  .multiply(25)
  .divide(25)
  .square(3)
  .squareRoot()
  .areaOfTheCircle(2)
  .circumference();

console.log(calculatorCount);
