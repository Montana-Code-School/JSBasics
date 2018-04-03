const chai = require('chai');
var addFront = require('../../arrays/addFront.js') ;

var expect = chai.expect;

xdescribe('Array Exercise - addFront()', function () {
  it('should add a number to the beginning of an array', function () {
    var arr = [1, 2, 3]
    var upFrontArray = addFront(arr, 4)
    expect(upFrontArray.length).to.eql(4)
    expect(upFrontArray[0]).to.eql(4)
  })
})
