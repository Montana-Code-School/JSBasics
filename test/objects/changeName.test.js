const chai = require('chai');
var changeName = require('../../objects/changeName.js') ;

var expect = chai.expect;

describe('Object Exercise - changeName()', function () {
  it('should change the name of an object', function () {
    var obj = {name: 'Tom'}
    changeName(obj, 'Larry')
    expect(obj.name).to.eql('Larry')
  })
})
