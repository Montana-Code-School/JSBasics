// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

var removeDuplicates = (arr) => {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if(!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
};

// DO NOT DELETE
module.exports = removeDuplicates;
