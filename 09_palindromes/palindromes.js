const palindromes = function (str) {
  let strArr = str.replace(/[^a-zA-Z0-9]/g, '');
  strArr = strArr.toLowerCase()
  strArr = strArr.trim();

  let rts = "";
  let str_len = strArr.length;

  for(let i = 1; i <= str_len; i++) {
    rts = rts.concat(strArr.charAt(str_len-i));
  }

  if(strArr == rts) {
    return true;
  } else {
    return false;
  }
};


// Do not edit below this line
module.exports = palindromes;
