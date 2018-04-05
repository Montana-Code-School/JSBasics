/**
 * Implement a function that computes the Fibonacci numbers up to the nth iteration
 * https://en.wikipedia.org/wiki/Fibonacci_number
 * 
 * @param {int} n - nth number of fibonacci number 
 */

let fibonacci = (n) => {
	if(n <= 2) {
		return 1;
	}
	else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};

// DO NOT DELETE
module.exports = fibonacci;
