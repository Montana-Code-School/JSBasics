var chai = require('chai');
var sortedArr = require('../../objects/sortByName.js');

var expect = chai.expect;
var assert = chai.assert;

xdescribe("Object Array Exercise - sortbyName()", function(){
  it('should return sorted array', function () {
    expect(sortedArr.length).to.eql(5);
    expect(sortedArr[0].name).to.eql('Beauty');
    expect(sortedArr[1].name).to.eql('Coco');
    expect(sortedArr[2].name).to.eql('Jumbo');
    expect(sortedArr[3].name).to.eql('Ophelia');
    expect(sortedArr[4].name).to.eql('Twiti');
  })
});
