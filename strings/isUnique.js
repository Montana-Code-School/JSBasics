// Implement a function called "isUnique" to determine if a string has all unique characters.

let isUnique = (str) => {
  let ch;

  for (let i = 0; i < str.length; i++) {
    ch = str[i];
    if (str.indexOf(ch, i + 1) > -1) { // i + 1 only searches in part of string which hasn't be looked at yet => more performant
      return false;
    }
  }
  
  return true;
};

// DO NOT DELETE
module.exports = isUnique;
