// Create a function called evenOdd that takes in the array and pushes into a
// new array "even" or "odd" for every value in the array, depending upon
// whether they are even or odd number values. Return the new array.
// Hint: Use the modulus operator

var evenOdd = function(arr) {
  var eoArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      eoArr.push("even");
    } else {
      eoArr.push("odd");
    }
  }

  return eoArr;
};

// DO NOT DELETE
module.exports = evenOdd;
