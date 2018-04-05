const chai = require('chai');
var fibonacci = require('../../recursion/fibonacci.js');

var expect = chai.expect;

xdescribe('Recursion Exercise - fibonacci()', () => {
  it('should return fibonaccis number at nth position', () => {
    expect(fibonacci(0)).equal(0);
    expect(fibonacci(1)).equal(1);
    expect(fibonacci(2)).equal(1);
    expect(fibonacci(3)).equal(2);
    expect(fibonacci(4)).equal(3);
    expect(fibonacci(5)).equal(5);
    expect(fibonacci(6)).equal(8);
    expect(fibonacci(7)).equal(13);
    expect(fibonacci(8)).equal(21);
    expect(fibonacci(9)).equal(34);
    expect(fibonacci(10)).equal(55);
    expect(fibonacci(11)).equal(89);
    expect(fibonacci(12)).equal(144);
    expect(fibonacci(13)).equal(233);
    expect(fibonacci(14)).equal(377);
    expect(fibonacci(15)).equal(610);
    expect(fibonacci(16)).equal(987);
    expect(fibonacci(17)).equal(1597);
    expect(fibonacci(18)).equal(2584);
    expect(fibonacci(19)).equal(4181);
    expect(fibonacci(20)).equal(6765);
	});
});