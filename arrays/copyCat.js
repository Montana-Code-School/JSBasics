// Create a function called copyCat that takes in an array, copies, and
// returns the second and third index values.

var copyCat;

copyCat = function(arr) {
  var newArr = [];
  newArr.push(arr[2]);
  newArr.push(arr[3]);

  return newArr;
};

// DO NOT DELETE
module.exports = copyCat;
