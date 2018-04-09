const chai = require('chai');
var removeFront = require('../../arrays/removeFront.js') ;

var expect = chai.expect;

xdescribe('Array Exercise - removeFront()', function () {
  it('should remove a number from the beginning of an array', function () {
    var arr = [1, 2, 3]
    var removedArray = removeFront(arr)
    expect(removedArray.length).to.eql(2)
    expect(removedArray[0]).to.eql(2)
    expect(removedArray[1]).to.eql(3)
  })
})
