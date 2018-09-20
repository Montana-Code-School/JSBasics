var chai = require('chai');
var reverseString = require('../../arrays/reverseString.js');

var expect = chai.expect;
var assert = chai.assert;

describe("Array Exercise - reverseString()", function(){
  it('returns a string', function(){
    var val = reverseString('bacon');
    assert.typeOf(val, "string");
  })
  it('reverses a string', function(){
    var val = reverseString("cat");
    assert.equal(val, "tac");
  })
  it('reverses strings with capital letters', function(){
    var val = reverseString("Mark");
    assert.equal(val, "kraM");
  })
});
