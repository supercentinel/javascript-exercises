const reverseString = function(string) {
  let gnirts = "";

  for(let i = string.length; i >= 0; i--) {
    gnirts = gnirts.concat(string.charAt(i))
  }

  return gnirts;
};

// Do not edit below this line
module.exports = reverseString;
