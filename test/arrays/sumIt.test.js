const chai = require("chai");
var sumIt = require("../../arrays/sumIt.js");

var expect = chai.expect;

xdescribe("Array Exercise - sumIt()", function() {
  it("should sum the values 1, 2 and 3", function() {
    var arr = [1, 2, 3];
    var sum = sumIt(arr);
    expect(sum, "1, 2 and 3 should sum to 6").to.eql(6);
  });
  it("should sum the values 27, 12 and 31", function() {
    var arr = [27, 12, 31];
    var sum = sumIt(arr);
    expect(sum, "27, 12 and 31 should sum to 70").to.eql(70);
  });
  it("should sum the values 152, 378, 469", function() {
    var arr = [152, 378, 469];
    var sum = sumIt(arr);
    expect(sum, "152, 378, 469 should sum to 999").to.eql(999);
  });
});
