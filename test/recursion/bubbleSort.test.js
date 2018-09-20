const chai = require('chai');
var bubbleSort = require('../../recursion/bubbleSort.js');

var expect = chai.expect;

describe('Recursion Exercise - bubbleSort()', () => {
  it('should return simple sorted array', () => {
    let simpleArr = [1,3,2]
    expect(bubbleSort(simpleArr, simpleArr.length-1)).to.eql([1,2,3]);
	});
  it('should return complex sorted array', () => {
    let complexArr = [1,3,2,25,123,45,5,4,66]
    expect(bubbleSort(complexArr, complexArr.length-1)).to.eql([1,2,3,4,5,25,45,66,123]);
	});
  it('should return complex sorted array with equal numbers', () => {
    let complexArr = [1,3,2,25,123,3,45,5,4,66]
    expect(bubbleSort(complexArr, complexArr.length-1)).to.eql([1,2,3,3,4,5,25,45,66,123]);
	});
});
