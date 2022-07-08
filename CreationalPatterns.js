// Class design pattern
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const civic = new Car(4, "V6", "grey");

// Constructor pattern

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4; 
    }
}

const cx5 = new SUV(4, "V8", "red");