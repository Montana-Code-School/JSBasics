// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

var removeDuplicates = function(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) > -1) {
      arr.splice(i, 1);
    } else {
      unique.push(arr[i]);
    }
  }
  return arr;
};

// DO NOT DELETE
module.exports = removeDuplicates;
