const chai = require('chai');
var fibonacci = require('../../recursion/fibonacci.js');

var expect = chai.expect;

describe('Recursion Exercise - fibonacci()', () => {
  it('should return fibonaccis number at nth position', () => {
    expect(fibonacci(1)).to.eql(1);
    expect(fibonacci(2)).to.eql(1);
    expect(fibonacci(3)).to.eql(2);
    expect(fibonacci(4)).to.eql(3);
    expect(fibonacci(5)).to.eql(5);
    expect(fibonacci(6)).to.eql(8);
    expect(fibonacci(7)).to.eql(13);
    expect(fibonacci(8)).to.eql(21);
    expect(fibonacci(9)).to.eql(34);
    expect(fibonacci(10)).to.eql(55);
    expect(fibonacci(11)).to.eql(89);
    expect(fibonacci(12)).to.eql(144);
    expect(fibonacci(13)).to.eql(233);
    expect(fibonacci(14)).to.eql(377);
    expect(fibonacci(15)).to.eql(610);
    expect(fibonacci(16)).to.eql(987);
    expect(fibonacci(17)).to.eql(1597);
    expect(fibonacci(18)).to.eql(2584);
    expect(fibonacci(19)).to.eql(4181);
    expect(fibonacci(20)).to.eql(6765);
	});
});