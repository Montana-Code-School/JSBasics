const chai = require('chai');
var fibonacci = require('../../recursion/fibonacci.js');

var expect = chai.expect;

xdescribe('Recursion Exercise - fibonacci()', () => {
  it('should return fibonaccis number at nth position', () => {
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(6)).toEqual(8);
    expect(fibonacci(7)).toEqual(13);
    expect(fibonacci(8)).toEqual(21);
    expect(fibonacci(9)).toEqual(34);
    expect(fibonacci(10)).toEqual(55);
    expect(fibonacci(11)).toEqual(89);
    expect(fibonacci(12)).toEqual(144);
    expect(fibonacci(13)).toEqual(233);
    expect(fibonacci(14)).toEqual(377);
    expect(fibonacci(15)).toEqual(610);
    expect(fibonacci(16)).toEqual(987);
    expect(fibonacci(17)).toEqual(1597);
    expect(fibonacci(18)).toEqual(2584);
    expect(fibonacci(19)).toEqual(4181);
    expect(fibonacci(20)).toEqual(6765);
	});
});