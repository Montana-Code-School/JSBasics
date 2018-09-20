// Create a function called copyCat that takes in an array, copies, and
// returns the second and third index values.

var copyCat = (arr) => {
  let newArr = arr.slice(2,4)
  return newArr
};

console.log(copyCat([1,2,3,4]))

// DO NOT DELETE
module.exports = copyCat;
