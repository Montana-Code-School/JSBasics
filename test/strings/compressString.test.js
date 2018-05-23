const chai = require('chai');
var compressString = require('../../strings/compressString.js') ;

var expect = chai.expect;

xdescribe('String Exercise - compressString()', () => {
  it('returns compressed string', () => {
    let str = '';
    expect(compressString(str)).to.eql('');
  });
  it('returns compressed string', () => {
    let str = 'aaaa';
    expect(compressString(str)).to.eql('a4');
  });
  it('returns compressed string', () => {
    let str = 'aaaabbc';
    expect(compressString(str)).to.eql('a4b2c1');
  });
  it('returns compressed string', () => {
    let str = 'aabcccccaaa';
    expect(compressString(str)).to.eql('a2blc5a3');
  });

})
