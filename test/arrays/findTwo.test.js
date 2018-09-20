const chai = require('chai');
var findTwo = require('../../arrays/findTwo.js') ;

var expect = chai.expect;

describe('Array Exercise - findTwo()', function () {
  it('should return the second index of an array', function () {
    var arr = [1, 2, 3];
    expect(findTwo(arr)).to.eql(3);
  })
})
