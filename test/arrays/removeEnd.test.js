const chai = require('chai');
var removeEnd = require('../../arrays/removeEnd.js') ;

var expect = chai.expect;

describe('Array Exercise - removeEnd()', function () {
  it('should remove a number from the end of an array', function () {
    var arr = [1, 2, 3]
    var pushedArray = removeEnd(arr, 4)
    expect(pushedArray.length).to.eql(2)
    expect(pushedArray[1]).to.eql(2)
  })
})
