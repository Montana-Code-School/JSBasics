const chai = require('chai');
var bubbleSort = require('../../sorting/bubbleSort.js') ;

var expect = chai.expect;

xdescribe('Sorting Exercise - bubbleSort()', () => {
  it('returns sorted numbers in given array', () => {
    let nums = [10,5,3,8,2,6,4,7,9,1];
    expect(bubbleSort(nums)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
})
