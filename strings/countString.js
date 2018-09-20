// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.

let countString = function(str, letter) {
  let letterCount = 0;
  let strLower = str.toLowerCase();
  let letterLower = letter.toLowerCase();

  for (let i = 0; i < strLower.length; i++) {
    if (strLower.charAt(i) === letterLower) {
      letterCount += 1;
    }
  }
  return letterCount;
};

// DO NOT DELETE
module.exports = countString;
