// Car OO Challenge

// Part One
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep!";
  }

  toString() {
    const { make, model, year } = this;
    return `The vehicle is a ${make} ${model} from the year ${year}`;
  }
}

let myFirstVehicle = new Vehicle("Toyota", "Supra", 2023);

// console.log(myFirstVehicle.toString());

// Part Two

class Car extends Vehicle {
  constructor(make, model, year, numWheels = 4) {
    super(make, model, year);
    this.numWheels = numWheels;
  }
}

let myFirstCar = new Car("Lexus", "ES300", 2004);
// console.log(myFirstCar.honk());
// console.log(myFirstCar.toString());
// console.log(myFirstCar.numWheels);

// Part Three
class Motorcycle extends Car {
  constructor(make, model, year, numWheels = 2) {
    super(make, model, year, numWheels);
  }

  revEngine() {
    return "VROOM!!!";
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

console.log(myFirstMotorcycle.honk()); // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels); // 2
