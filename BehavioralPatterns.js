// Observer pattern
class Car {
  constructor(gas) {
    this.gas = gas;
  }

  setGasLevel(val) {
    this.gas = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions.remove.filter(function (el) {
      return el !== observer;
    });
  }

  notifyAll() {
    return this.actions.forEach(
      function (el) {
        el.update(this);
      }.bind(this)
    );
  }
}

class consumption {
  update(car) {
    car.gas = car.gas + 1;
  }
}

// State pattern
// React, Angular
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news",
      },
      news2: {
        type: "everything",
        query: "domains=techcrunch.com&language=en",
      },
      news3: {
        type: "everything",
        query: "domains=comicbookmovie.com&language=en",
      },
    };
  }
}

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }
}

// Chain of responsibility

// Iterator pattern

newsfeeds = [
  {
    type: "top-headlines",
    query: "sources=bbc-news",
  },
  {
    type: "everything",
    query: "domains=techcrunch.com&language=en",
  },
  {
    type: "everything",
    query: "domains=comicbookmovie.com&language=en",
  },
];

for (let feed of newsfeeds) {
  console.log(feed.type);
}

// Strategy pattern

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const civic = new Car(4, "V6", "grey");
const cx5 = new SUV(4, "V8", "red");

console.log(civic);
console.log(cx5);

// Memento pattern

// Mediator pattern

class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map((airplane) => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}

// Command pattern 
// Redux