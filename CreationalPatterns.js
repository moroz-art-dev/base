// Class design pattern
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

// Constructor pattern
// class SUV extends Car {
//   constructor(doors, engine, color) {
//     super(doors, engine, color);
//     this.wheels = 4;
//   }
// }

// Factory pattern
class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "V6", "grey");
      case "honda":
        return new Car(2, "V8", "red");
    }
  }
}

// Abstract factory pattern
class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createCar(type) {
    switch (type) {
      case "sx5":
        return new Car(4, "V6", "grey");
      case "sante fe":
        return new Car(2, "V8", "red");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createCar(model);
  }
};

const cx5 = autoManufacturer("suv", "sx5");
