const chai = require('chai');
var addKey = require('../../objects/addKey.js') ;

var expect = chai.expect;

xdescribe('Object Exercise - addKey()', function () {
  it('should add a weight key to an object and assign it a value', function () {
    var obj = {}
    addKey(obj)
    expect(obj.weight).to.not.eql(undefined)
  })
})
