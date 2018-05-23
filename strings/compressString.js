/**
 * Implement a function called "compressString" to perform basic string compression 
 * using the counts of repeated characters. For example, the string "aabcccccaaa" 
 * would become "a2b1c5a3". If the "compressed" string would not become smaller than 
 * the original string, your method should return the original string. 
 * You can assume the string has only uppercase and lowercase letters (a-z).
 * 
 * @param {string} str - string
 * 
 */ 

let compressString = (str) => {
	let compressedStr = '';
	let charCount = 0;

	for( let i = 0; i < str.length; i++ ) {
		charCount++;
		if( str.charAt(i) !==  str.charAt(i + 1) ) {
			compressedStr += str[i] + charCount;
			charCount = 0;
		}
	}

	return compressedStr;
};

// DO NOT DELETE
module.exports = compressString;
