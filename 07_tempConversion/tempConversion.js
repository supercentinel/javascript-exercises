const convertToCelsius = function(fahrenheit) {
  c = (fahrenheit - 32)/(1.8);

  if (Number.isInteger(c) == true) {
    return c;
  } else {
    return Number(c.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  f = ((celsius * 1.8) + 32);

  if (Number.isInteger(f) == true) {
    return f;
  } else {
    return Number(f.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
