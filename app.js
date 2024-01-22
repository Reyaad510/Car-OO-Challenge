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
