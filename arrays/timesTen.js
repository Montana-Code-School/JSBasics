// Create a function called timesTen that takes in an array and multiplies
// each value by 10 and returns the new array.
// Hint: Use the map method

var timesTen = function(arr) {
  var arr10 = [];

  for (var i = 0; i < arr.length; i++) {
    arr10[i] = arr[i] * 10;
  }

  return arr10;
};

// DO NOT DELETE
module.exports = timesTen;
