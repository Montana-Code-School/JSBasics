// Create a function called sumIt that takes in the array and returns the sum
// of each of the values in the array.

var sumIt = function(arr) {
  var sum = 0;
  arr.forEach((num) => {
    sum += num;
  })
  
  return sum;

}

// DO NOT DELETE
module.exports = sumIt;
