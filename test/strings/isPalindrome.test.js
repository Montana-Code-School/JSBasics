const chai = require('chai');
var isPalindrome = require('../../strings/isPalindrome.js') ;

var expect = chai.expect;

xdescribe('String Exercise - isPalindrome()', () => {
  
  it('returns true if string is a palindrome', () => {
    let str = "eye";
    expect(isPalindrome(str)).to.be.true;
  });

  it('returns true - string is a palindrome, special characters should be omitted', () => {
    let str = "_eye";
    expect(isPalindrome(str)).to.be.true;
  });

  it('returns true - string is a palindrome, spaces are allowed', () => {
    let str = "race car";
    expect(isPalindrome(str)).to.be.true;
  });


})
