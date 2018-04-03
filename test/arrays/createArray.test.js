const chai = require('chai');
var arr = require('../../arrays/createArray.js') ;

var expect = chai.expect;

xdescribe('Create an array with following numbers 12, 42, 36, 51, 96', function () {
  it('should be an array of length 5', function () {
    expect(arr.length).to.eql(5)
  })
  it('should have the values 12, 42, 36, 51, 96', function () {
    expect(arr[0]).to.eql(12)
    expect(arr[1]).to.eql(42)
    expect(arr[2]).to.eql(36)
    expect(arr[3]).to.eql(51)
    expect(arr[4]).to.eql(96)
  })
})
