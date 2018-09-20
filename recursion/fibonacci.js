/**
 * Implement a function that computes the Fibonacci numbers up to the nth iteration
 * https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @param {int} n - nth number of fibonacci number
 */

let fibonacci = (n) => {
  if(n <= 2) {
    return 1
  }
	return fibonacci(n - 2) + fibonacci(n - 1)
};

// DO NOT DELETE
module.exports = fibonacci;
