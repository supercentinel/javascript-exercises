const fibonacci = function(n) {

  if(n < 0) {
    return "OOPS";
  }

  if(n == 2 || n == 1 || n == 0) {
    return 1;
  } else {
    return fibonacci(n-2) + fibonacci(n-1);
  }
};
/*
0,1,1,2,3
0,1,2,3,4,5
*/
// Do not edit below this line
module.exports = fibonacci;
