/**
 * Implement a function that that computes a factorial recursively.
 * Take the input number and multiply each preceding integer until you hit one.
 * https://en.wikipedia.org/wiki/Factorial
 * 
 * @param {int} num - starting number 
 */

let factorial = (num) => {
	if (num < 2) {
		return 1;
	}
	else {
		return num * factorial(num-1);
	}
};

// DO NOT DELETE
module.exports = factorial;
