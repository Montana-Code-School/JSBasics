// Create a function called sumIt that takes in the array and returns the sum
// of each of the values in the array.

var sumIt = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

// DO NOT DELETE
module.exports = sumIt;
