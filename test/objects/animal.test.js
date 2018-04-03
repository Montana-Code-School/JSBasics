const chai = require('chai');
var animal = require('../../objects/animal.js') ;

var expect = chai.expect;

xdescribe('Object Exercise  - Animal', function () {
  it('Should have the appropriate keys', function () {
    expect(animal.species).to.not.eql(undefined)
    expect(animal.name).to.not.eql(undefined)
    expect(animal.age).to.not.eql(undefined)
    expect(animal.gender).to.not.eql(undefined)
    expect(animal.favoriteFood).to.not.eql(undefined)
  })
  it('Should have a speech method that returns a string', function () {
    expect(animal.speach()).to.be.a('string')
  })
})
