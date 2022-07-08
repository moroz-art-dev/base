let instance = null;

// Class design pattern
class Car {
  constructor(doors, engine, color) {
    // Singleton pattern
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, "V6", "grey");
const honda = new Car(4, "V8", "red");

// Constructor pattern
class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const cx5 = new SUV(4, "V8", "red");
