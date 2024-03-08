"use strict";

class Animal {
  constructor(name, age, type, favouriteFoods, totalLegs = 4) {
    // properties goes here
    this.name = name;
    this.age = age;
    this.type = type;
    this.favouriteFoods = favouriteFoods;
    this.totalLegs = totalLegs;
  }
  // methods goes here
  Move() {
    if (this.totalLegs > 0) {
      return `I walking and running with my legs`;
    } else {
      return `I use my fins to swimming`;
    }
  }

  getInformation(str) {
    const move = this.Move();
    let result = "";
    if (this.age > 1) {
      result += `${move}\n${str} My name ${this.name}\nMy current age is ${
        this.age
      } years old\nI am a ${
        this.type
      }\nMy favorite foods are ${this.favouriteFoods.join(", ")}.`;
    } else {
      result += `${move}\n${str} My name ${this.name}\nMy current age is ${
        this.age
      } year old\nI am a ${
        this.type
      }\nMy favorite foods are ${this.favouriteFoods.join(", ")}.`;
    }

    return result;
  }
}

class Cat extends Animal {}

const ruruTheCat = new Cat("Chiko", 1, "Cat", ["Whiskas", "Fish", "Meat"]); // Instantiate = proses pembuatan instance
ruruTheCat.name = "Chiko The Cat";
// console.log(ruruTheCat); // Instance ruruThecat
// console.log(ruruTheCat.Move());

// console.log(ruruTheCat.getInformation("Annyeong haseo~"));

// console.log("=======================================");

class Dog extends Animal {}

const heliTheDog = new Dog("Heli", 2, "Dog", ["Meat", "Bone", "Ikan"]);
// console.log(heliTheDog);
// console.log(heliTheDog.Move());

// console.log(heliTheDog.getInformation("Sawadikap!"));

// console.log("=======================================");

class Fish extends Animal {
  constructor(name, age, type, favouriteFoods, totalLegs, totalFins) {
    super(name, age, type, favouriteFoods, totalLegs);
    this.totalFins = totalFins;
  }
}

const channaTheFish = new Fish(
  "Channa",
  1,
  "Fish",
  ["Pelet", "Moss", "Worms"],
  0,
  5
);
// console.log(channaTheFish);
// console.log(channaTheFish.Move());

// console.log(channaTheFish.getInformation("Aloha"));

class SuperPower {
  constructor(name) {
    this.name = name;
  }

  punch() {
    console.log(`Hit hit hit! Punch`);
  }
}

class SuperCat extends Cat {
  constructor(name, age, favouriteFoods, superPower) {
    super(name, age, "Cat", favouriteFoods, 4);
    this.superPower = superPower;
  }

  train() {
    const random = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < random; i++) {
      this.superPower.push(new SuperPower("Mecha Claw"));
    }
  }
}

const mechaClaw = new SuperPower("Mecha Claw");
// console.log(mechaClaw);
const felixTheCat = new SuperCat(
  "Felix",
  100,
  ["Chiken Wings", "Pizza"],
  mechaClaw
);
// console.log(felixTheCat);

console.log(felixTheCat.getInformation("Ohayou!"));
