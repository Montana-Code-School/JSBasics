const chai = require('chai');
var chopIt = require('../../arrays/chopIt.js') ;

var expect = chai.expect;

xdescribe('Array Exercise - chopIt', function () {
  it('should insert the two numbers into the array after the second index value and delete the third index value', function () {
    var arr = [1,2,3,4,5]
    var chopItArr = chopIt(arr, 6, 7)
    expect(chopItArr.length).to.eql(6)
    expect(chopItArr[3]).to.eql(6)
    expect(chopItArr[4]).to.eql(7)
    expect(chopItArr[5]).to.eql(5)
  })
})
