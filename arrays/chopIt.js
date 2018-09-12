// Create a function called chopIt that takes in an array and two numbers.
// It deletes the original 3rd index value and inserts the two numbers in it's place.

var chopIt = function(arr, num1, num2) {
  arr.splice(3, 1, num1, num2);
  return arr;

}

// DO NOT DELETE
module.exports = chopIt;
