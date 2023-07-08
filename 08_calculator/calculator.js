const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  let total = 0;

  for(let i = 0; i < a.length; i++) {
    total += a[i];
  }

  return total;
};

const multiply = function(...args) {
  let result = 1;

  for(let i = 0; i < args.length; i++) {
    result *= args[i];
  }

  return result;
};

const power = function(a, b) {
  let result = a;

  for(let i = 1; i < b; i++) {
    result *= a;
  }

  return result;
};

const factorial = function(a) {

  if(a == 1 || a == 0) {
    return 1;
  } else {
    return a * factorial(a-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
