const chai = require('chai');
var isAnagram = require('../../strings/isAnagram.js') ;

var expect = chai.expect;

describe('String Exercise - isAnagram()', () => {
  it('returns true if strings are anagrams', () => {
    let str1 = "ant";
    let str2 = "tan";
    expect(isAnagram(str1, str2)).to.be.true;
  });

  it('returns false if strings are no anagrams', () => {
    let str1 = "aab";
    let str2 = "baa";
    expect(isAnagram(str1, str2)).to.be.false;

  });

  it('returns true if strings are anagrams', () => {
    let str1 = "stream";
    let str2 = "master";
    expect(isAnagram(str1, str2)).to.be.true;
  });

  it('returns false if strings are no anagrams', () => {
    let str1 = "stream";
    let str2 = "pigeon";
    expect(isAnagram(str1, str2)).to.be.false;

  });

})
