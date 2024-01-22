// Car OO Challenge

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    console.log("Beep!");
  }

  toString() {
    const { make, model, year } = this;
    console.log(`The vehicle is a ${make} ${model} from the year ${year}`);
  }
}

let myFirstVehicle = new Vehicle("Toyota", "Supra", 2023);

// console.log(myFirstVehicle.toString());
