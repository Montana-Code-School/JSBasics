const chai = require('chai');
var urlify = require('../../strings/urlify.js') ;

var expect = chai.expect;

xdescribe('String Exercise - urlify()', () => {
  it('returns urlified string', () => {
    let str = "Mr John Smith";
    expect(urlify(str)).to.eql('Mr%20John%20Smith');
  });

  it('returns urlified string a string with spaces at the end', () => {
    let str = "Mr John Smith    ";
    expect(urlify(str)).to.eql('Mr%20John%20Smith');
  });

  it('returns urlified string with spaces at the beginning', () => {
    let str = "   Hello World    ";
    expect(urlify(str)).to.eql('Hello%20World');
  });

  it('returns urlified string without extra spaces', () => {
    let str = "This  string  has      some extra   spaces";
    expect(urlify(str)).to.eql('This%20string%20has%20some%20extra%20spaces');
  });

})
