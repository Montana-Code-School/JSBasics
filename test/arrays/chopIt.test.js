const chai = require("chai");
var chopIt = require("../../arrays/chopIt.js");

var expect = chai.expect;

xdescribe("Array Exercise - chopIt", function() {
  it("should insert the two numbers into the array after the second index value and delete the third index value", function() {
    var arr = [31, 23, 54, 41, 78];
    var chopItArr = chopIt(arr, 64, 71);
    expect(chopItArr).to.eql([31, 23, 54, 64, 71, 78]);
  });
  it("should work with a different example", function() {
    var arr = [84, 93, 71, 62, 59];
    var chopped = chopIt(arr, -12, 26);
    expect(chopped).to.eql([84, 93, 71, -12, 26, 59]);
  });
});
