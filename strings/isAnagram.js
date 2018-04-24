/**
 * Given two strings, implement a function called "isAnagram" which determines 
 * if one string is a permutation of the other string, also know as an "Anagram".
 * https://en.wikipedia.org/wiki/Anagram
 * 
 * @param {string} str1 - first string
 * @param {string} str2 - second string
 * 
 */ 

/*
 * Approach 1: O(N log N); where N is the length of the string
 */
let isAnagram = (str1, str2) => {

	// Strings of different lengths can not be permutations of each other
	if (str1.length !== str2.length) {
		return false;
	}

	// Sort both strings
	var sortStr1 = str1.split('').sort().join('');
	var sortStr2 = str2.split('').sort().join('');

	// compare both strings
	return (sortStr1 === sortStr2);
};

/*
 * Approach 2: O(N); where N is the length of the string
 */
isAnagram = (str1, str2) => {

	// Strings of different lengths can not be permutations of each other
	if (str1.length !== str2.length) {
		return false;
	}

	// Create a character count for the string
  let str1Count = {};
  Array.prototype.forEach.call(str1, ch => {
    str1Count[ch] = str1Count[ch] ? 1 + str1Count[ch] : 1;
  });

  // compare the character count with the second string
  for (let i = 0; i < str2.length; i++) {
    if( !str1Count[str2[i]] ) {
      return false;
    } else {
      str1Count[str2[i]] -= 1;
    }
  }
  return true;
};

// DO NOT DELETE
module.exports = isAnagram;
