// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

var removeDuplicates = function(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

// DO NOT DELETE
module.exports = removeDuplicates;
