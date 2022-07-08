// Class design pattern
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

// Constructor pattern
class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

// Factory pattern
class carFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "V6", "grey");
      case "honda":
        return new Car(2, "V8", "red");
    }
  }
}

const factory = new carFactory();
const myHonda = factory.createCar("honda")
