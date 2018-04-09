const chai = require('chai');
var chopIt = require('../../arrays/chopIt.js');

var expect = chai.expect;

describe('Array Exercise - chopIt', function () {
  it('should insert the two numbers into the array after the second index value and delete the third index value', function () {
    var arr = [1, 2, 3, 4, 5];
    var chopItArr = chopIt(arr, 6, 7);
    expect(chopItArr).to.eql([1, 2, 3, 6, 7, 5]);
  });
  it('should work with a different example', function () {
    var arr = [9, 8, 7, 6];
    var chopped = chopIt(arr, -1, -2);
    expect(chopped).to.eql([9, 8, 7, -1, -2]);
  });
});
