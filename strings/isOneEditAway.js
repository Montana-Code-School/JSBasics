/**
 * There are three types of edits that can be performed on strings: 
 * Insert a character, remove a character, or replace a character. 
 * Given two strings, implement a function "isOneEditAway" to check 
 * if they are one edit (or zero edits) away.
 * https://en.wikipedia.org/wiki/Palindrome
 * 
 * @param {string} str1 - first string
 * @param {string} str2 - second string
 * 
 */ 

let isOneEditAway = (str1, str2) => {

	// Strings are the same
	if( str1 === str2 ) {
		return false;
	}

	// String lengths difference is more than one character
	if( Math.abs(str2.length - str1.length) > 1 ) {
		return false;
	}
	
	let numDiff = 0; // number of differences

	// Strings are the same length
	if( str1.length === str2.length ) {
		for( let i = 0; i < str1.length; i++ ) {
			if( str1.charAt(i) !== str2.charAt(i) ) {
				numDiff++;
			}
		}
	}
	else { // Strings are not the same length (1 character shorter or longer)
		for ( let i = 0, j = 0; i < Math.max(str1.length, str2.length) && j < Math.max(str1.length, str2.length); i++, j++ ) {
			if (str1[i] !== str2[j]) { // characters are not the same at same index
        numDiff++; // increment number of differences
        if (numDiff > 1) { // if there more than one differences return false
					return false;
				}
        if (str1.length > str2.length){ // increment index of longer string again
					i++;
				}
				else {
					j++;
				}
      }
      if (str1[i] !== str2[j]) { // if just one character has been removed, these charcters should be the same again
				numDiff++;
			}
    }
	}

	return numDiff < 2;
};

// Solution 2
let isOneEditAway2 = (str1, str2) => {

	// Strings are the same
	if( str1 === str2 ) {
		return false;
	}

	// String lengths difference is more than one character
	if( Math.abs(str2.length - str1.length) > 1 ) {
		return false;
	}
	
	let numDiff = 0; // number of differences

		if( str2.length === str1.length + 1 ) {
		for( let i = 0; i < str1.length; i++ ) {
			if( str2.indexOf(str1.charAt(i)) < 0) {
				return false;
			}
		}
		return true;
	}

	if( str2.length === str1.length - 1 ) {
		let countRemovals = 0;

		for( let i = 0; i < str1.length; i++ ) {
			if( str2.indexOf(str1.charAt(i)) < 0) {
				countRemovals++;

				if( countRemovals > 1) {
					return false;
				}
			}
		}
		return true;
	}

	if( str1.length === str2.length ) {
		let countReplacements = 0;

		for( let i = 0; i < str1.length; i++ ) {
			if( str1.charAt(i) !== str2.charAt(i) ) {
				countReplacements++;

				if( countReplacements > 1) {
					return false;
				}
			}
		}
		return true;
	}

	return false;
};

// DO NOT DELETE
module.exports = isOneEditAway;
