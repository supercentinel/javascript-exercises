const repeatString = function(str, times) {
  let newstr = "";

  if(times < 0) {
    return "ERROR";
  }

  for(let i = 0; i < times; i++) {
    newstr = newstr.concat(str);
  }

  return newstr;
};

// Do not edit below this line
module.exports = repeatString;
