const chai = require('chai');
var keyLoop = require('../../objects/keyLoop.js') ;

var expect = chai.expect;

describe('Object Exercise 7 - keyLoop', function () {
  it("should report if there's a monkey key in the object", function () {
    var obj = { animal: "monkey" }
    expect(keyLoop(obj)).to.eql("There's a monkey!")
  })
  it("should report if there's not a monkey key in the object", function () {
    var obj = { animal: "python" }
    expect(keyLoop(obj)).to.eql("There's no monkey here!")
  })
})
