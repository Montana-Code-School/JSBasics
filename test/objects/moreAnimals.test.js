const chai = require('chai');
var moreAnimals = require('../../objects/moreAnimals.js') ;

var expect = chai.expect;

xdescribe('Object Arrays Exercise - More Animals', function () {
  it('should be an array of length 3', function () {
    expect(moreAnimals.length).to.eql(3)
  })
  it('should have valid key value pairs for all 3 animal objects',function(){
    expect(moreAnimals[0].species).to.not.eql(undefined)
    expect(moreAnimals[0].name).to.not.eql(undefined)
    expect(moreAnimals[0].age).to.not.eql(undefined)
    expect(moreAnimals[0].gender).to.not.eql(undefined)
    expect(moreAnimals[0].favoriteFood).to.not.eql(undefined)
    expect(moreAnimals[1].species).to.not.eql(undefined)
    expect(moreAnimals[1].name).to.not.eql(undefined)
    expect(moreAnimals[1].age).to.not.eql(undefined)
    expect(moreAnimals[1].gender).to.not.eql(undefined)
    expect(moreAnimals[1].favoriteFood).to.not.eql(undefined)
    expect(moreAnimals[2].species).to.not.eql(undefined)
    expect(moreAnimals[2].name).to.not.eql(undefined)
    expect(moreAnimals[2].age).to.not.eql(undefined)
    expect(moreAnimals[2].gender).to.not.eql(undefined)
    expect(moreAnimals[2].favoriteFood).to.not.eql(undefined)
  })
})
