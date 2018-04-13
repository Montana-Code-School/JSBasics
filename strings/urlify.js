/**
 * Implement a function called "urlify" which replace all spaces  
 * with '%20' the URL encoded character for a space
 * 
 * @param {string} str - string sentence
 * 
 */ 

let urlify = (str) => {
	return str.trim().replace(/\s+/g, '%20');
};

// DO NOT DELETE
module.exports = urlify;
