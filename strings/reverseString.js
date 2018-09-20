/* 
 * Write a JavaScript function reverseString to reverse a given string.
 * Reading Tip: https://medium.com/quick-code/5-ways-to-reverse-a-string-in-javascript-466f62845827
 */

var reverseString = function(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// DO NOT DELETE
module.exports = reverseString;
