const chai = require('chai');
var isOneEditAway = require('../../strings/isOneEditAway.js') ;

var expect = chai.expect;

xdescribe('String Exercise - isOneEditAway()', () => {
  
  it('returns false if first string is empty', () => {
    let str1 = "";
    let str2 = "not empty";
    expect(isOneEditAway(str1, str2)).to.be.false;
  });
  
  it('returns false if second string is empty', () => {
    let str1 = "";
    let str2 = "not empty";
    expect(isOneEditAway(str1, str2)).to.be.false;
  });
  
  it('returns true if second string has one extra inserted character', () => {
    let str1 = "pale";
    let str2 = "pales";
    expect(isOneEditAway(str1, str2)).to.be.true;
  });
  
  it('returns true if second string has one removed character', () => {
    let str1 = "pale";
    let str2 = "ple";
    expect(isOneEditAway(str1, str2)).to.be.true;
  });
  
  it('returns true if second string has one replaced character', () => {
    let str1 = "pale";
    let str2 = "bale";
    expect(isOneEditAway(str1, str2)).to.be.true;
  });
  
  it('returns false if second string is more than one edit away', () => {
    let str1 = "pale";
    let str2 = "bake";
    expect(isOneEditAway(str1, str2)).to.be.false;
  });
  
  it('returns false if second string is more than one edit away', () => {
    let str1 = "ab";
    let str2 = "ace";
    expect(isOneEditAway(str1, str2)).to.be.false;
  });

})
