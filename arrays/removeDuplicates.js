// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

var removeDuplicates = function(arr) {
  var unique = []
  arr.forEach((num, i) => {
    if (unique.indexOf(num) > 0 ) {
      arr.splice(i, 1);
    }
    else {
      unique.push(num);
    }
  })
}
 

// DO NOT DELETE
module.exports = removeDuplicates;
