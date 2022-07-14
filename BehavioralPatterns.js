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
        this.actions.remove.filter(function(el) {
            return el !== observer;
        });
    }

    notifyAll() {
        return this.actions.forEach(function(el) {
            el.update(this);
        }.bind(this));
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
          type: 'top-headlines',
          query: 'sources=bbc-news'
        },
        news2: {
          type: 'everything',
          query: 'domains=techcrunch.com&language=en'
        },
        news3: {
          type: 'everything',
          query: 'domains=comicbookmovie.com&language=en'
        }
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