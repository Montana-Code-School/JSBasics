const chai = require('chai');
var timesTen = require('../../arrays/timesTen.js') ;

var expect = chai.expect;

describe('Array Exercise - timesTen()', function () {
  it('Should return a new array where each value is multiplied by ten', function () {
    var arr = [1, 2, 3]
    var timesTenArr = timesTen(arr)
    expect(timesTenArr.length).to.eql(3)
    expect(timesTenArr[0]).to.eql(10)
    expect(timesTenArr[1]).to.eql(20)
    expect(timesTenArr[2]).to.eql(30)
  })
})
