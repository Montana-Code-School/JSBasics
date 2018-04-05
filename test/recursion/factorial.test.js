const chai = require('chai');
var factorial = require('../../recursion/factorial.js');

var expect = chai.expect;

describe('Recursion Exercise - factorial()', () => {
  it('should return factorials', () => {
    expect(factorial(1)).equal(1);
    expect(factorial(2)).equal(2);
    expect(factorial(3)).equal(6);
    expect(factorial(4)).equal(24);
    expect(factorial(5)).equal(120);
    expect(factorial(6)).equal(720);
    expect(factorial(7)).equal(5040);
    expect(factorial(8)).equal(40320);
    expect(factorial(9)).equal(362880);
    expect(factorial(10)).equal(3628800);
	});
});