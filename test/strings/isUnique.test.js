const chai = require('chai');
var isUnique = require('../../strings/isUnique.js') ;

var expect = chai.expect;

xdescribe('String Exercise - isUnique()', () => {
  it('returns true if string is all unique characters', () => {
    let str = "abcdefghijklmnopqrstuvyxz";
    expect(isUnique(str)).to.be.true;
  });

  it('returns false if string has duplicate characters', () => {
    let str = "abcdefghijklmnopqrstuvyxzabcdefghijklmnopqrstuvyxz";
    expect(isUnique(str)).to.be.false;

  });

  it('returns true if string is all unique characters including special characters', () => {
    let str = "qwerty\" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    expect(isUnique(str)).to.be.true;
  });

  it('returns false if string has duplicate characters including special characters', () => {
    let str = "qwerty\" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    expect(isUnique(str)).to.be.false;
  });

})
