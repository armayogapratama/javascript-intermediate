"use strict";

class Calculator {
  //write your code here
  constructor(number = 0) {
    this.number = number;
  }
  add(value) {
    this.number += value;
    return this;
  }
  subtract(value) {
    this.number -= value;
    return this;
  }
  multiply(value) {
    this.number *= value;
    return this;
  }
  divide(value) {
    this.number /= value;
    return this;
  }
  square(value) {
    this.number = Math.pow(this.number, value);
    // this.number = this.number * this.number;
    return this;
  }
  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }
  areaOfTheCircle() {
    this.number = Math.PI * Math.pow(this.number, 2);
    return this;
  }
  circumference() {
    this.number = 2 * Math.PI * this.number;
    return this;
  }
}

/**
 * you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

// execute Calculator in file index.js
module.exports = Calculator;
