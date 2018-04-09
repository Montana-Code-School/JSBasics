const chai = require('chai');
var sumIt = require('../../arrays/sumIt.js') ;

var expect = chai.expect;

xdescribe('Array Exercise - sumIt()', function () {
  it('should sum the values in an array of numbers', function () {
    var arr = [1, 2, 3]
    var sum = sumIt(arr)
    expect(sum, '1,2 and 3 should sum to 6').to.eql(6)
  })
})
