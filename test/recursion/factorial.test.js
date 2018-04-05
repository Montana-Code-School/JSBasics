const chai = require('chai');
var factorial = require('../../recursion/factorial.js');

var expect = chai.expect;

describe('Recursion Exercise - factorial()', () => {
  it('should return factorials', () => {
    expect(factorial(1)).to.eql(1);
    expect(factorial(2)).to.eql(2);
    expect(factorial(3)).to.eql(6);
    expect(factorial(4)).to.eql(24);
    expect(factorial(5)).to.eql(120);
    expect(factorial(6)).to.eql(720);
    expect(factorial(7)).to.eql(5040);
    expect(factorial(8)).to.eql(40320);
    expect(factorial(9)).to.eql(362880);
    expect(factorial(10)).to.eql(3628800);
	});
});