const chai = require('chai');
var findAge = require('../../objects/findAge.js') ;

var expect = chai.expect;

describe('Object Exercise - findAge()', function () {
  it('should return the age value', function () {
    var age = findAge({age: 10});
    expect(age).to.eql(10)
  })
})
