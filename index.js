// Functions as first-class citizens
const calc = () => {
  return 4 * 3;
};

let number = calc();

// Callback
const printCalc = (callback) => {
    console.log(callback());
};

printCalc(calc);
