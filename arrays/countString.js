// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.

var countString = (str, char) => {
  let newStr = str.toLowerCase()
  let newChar = char.toLowerCase()
  let count = 0
  for (var i = 0; i < newStr.length; i++) {
    if(newStr[i] === newChar){
      count++
    }
  }
  return count
};

countString("mmmm", "m")

// DO NOT DELETE
module.exports = countString;
