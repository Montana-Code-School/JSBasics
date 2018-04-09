var chai = require('chai');
var removeDuplicates = require('../../arrays/removeDuplicates.js');

var expect = chai.expect;
var assert = chai.assert;

xdescribe("Array Exercise - removeDuplicates()", function(){
  it('should remove duplicates from arr', function () {
    var arr = [1, 2, 2, 3, 4, 5, 5];
    var noDubsArray = removeDuplicates(arr, 4);
    expect(noDubsArray.length).to.eql(5);
    expect(noDubsArray[2]).to.eql(3);
    expect(noDubsArray[4]).to.eql(5);
  })
});
