const chai = require('chai');
var rotateMatrix = require('../../strings/rotateMatrix.js') ;

var expect = chai.expect;

xdescribe('String Exercise - rotateMatrix()', () => {
  it('returns rotated matrix', () => {
    let matrix = [
      ['a', 'b'],
      ['c', 'd']
    ];

    let rotatedMatrix = [
      ['c', 'a'],
      ['d', 'b']
    ];

    expect(rotateMatrix(matrix)).to.eql(rotatedMatrix);
  });
  
  it('returns rotated matrix', () => {
    let matrix = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];

    let rotatedMatrix = [
      ['g', 'd', 'a'],
      ['h', 'e', 'b'],
      ['i', 'f', 'c']
    ]
    expect(rotateMatrix(matrix)).to.eql(rotatedMatrix);
  });
  
  it('returns rotated matrix', () => {
    let matrix = [
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h',],
      ['i', 'j', 'k', 'l'],
      ['m', 'n', 'o', 'p']
    ];

    let rotatedMatrix = [
      ['m', 'i', 'e', 'a'],
      ['n', 'j', 'f', 'b'],
      ['o', 'k', 'g', 'c'],
      ['p', 'l', 'h', 'd']
    ]
    expect(rotateMatrix(matrix)).to.eql(rotatedMatrix);
  });

})
