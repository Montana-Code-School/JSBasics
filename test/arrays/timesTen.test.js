const chai = require("chai");
var timesTen = require("../../arrays/timesTen.js");

var expect = chai.expect;

xdescribe("Array Exercise - timesTen()", function() {
  it("Should return a new array where each value is multiplied by ten", function() {
    var arr = [5, 9, 4, 2, 7];
    var timesTenArr = timesTen(arr);
    expect(timesTenArr.length).to.eql(5);
    expect(timesTenArr[0]).to.eql(50);
    expect(timesTenArr[1]).to.eql(90);
    expect(timesTenArr[2]).to.eql(40);
    expect(timesTenArr[3]).to.eql(20);
    expect(timesTenArr[4]).to.eql(70);
  });
});
