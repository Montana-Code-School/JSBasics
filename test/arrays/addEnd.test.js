const chai = require('chai');
var addEnd = require('../../arrays/addEnd.js');

var expect = chai.expect;

describe('Array Exercise - addEnd()', function () {
  it('should add a number to the end of an array', function () {
    var arr = [1, 2, 3]
    var pushedArray = addEnd(arr, 4)
    expect(pushedArray.length).to.eql(4)
    expect(pushedArray[3]).to.eql(4)
  })
})
