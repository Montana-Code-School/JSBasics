// Create a function called timesTen that takes in an array and multiplies
// each value by 10 and returns the new array.
// Hint: Use the map method

var timesTen = function(arr) {
  var arr10 = arr.map((num) => {
    return num * 10;

  })
  return arr10;

}

// DO NOT DELETE
module.exports = timesTen;
