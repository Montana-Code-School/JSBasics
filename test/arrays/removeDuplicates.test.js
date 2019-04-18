var chai = require("chai");
var removeDuplicates = require("../../arrays/removeDuplicates.js");

var expect = chai.expect;

describe.only("Array Exercise - removeDuplicates()", function() {
  it("should remove duplicates at the beginning of the array", function() {
    var arr = [7, 7, 2, 1, 4, 8, 3];
    var noDubsArray = removeDuplicates(arr);
    expect(noDubsArray.length).to.eql(6, "The length of the array should be 6");
    expect(noDubsArray[2]).to.eql(1);
    expect(noDubsArray[5]).to.eql(3);
  });
  it("should remove duplicates at the end of the array", function() {
    var arr = [7, 8, 2, 1, 4, 3, 3];
    var noDubsArray = removeDuplicates(arr);
    expect(noDubsArray.length).to.eql(6, "The length of the array should be 6");
    expect(noDubsArray[2]).to.eql(2);
    expect(noDubsArray[5]).to.eql(3);
  });
  it("should remove consecutive duplicates from array", function() {
    var arr = [7, 2, 2, 1, 4, 8, 5];
    var noDubsArray = removeDuplicates(arr);
    expect(noDubsArray.length).to.eql(6, "The length of the array should be 6");
    expect(noDubsArray[2]).to.eql(1);
    expect(noDubsArray[5]).to.eql(5);
  });
  it("should remove duplicates from array even if the duplicates are not consecutive", function() {
    var arr = [7, 2, 1, 2, 4, 8, 5];
    var noDubsArray = removeDuplicates(arr);
    expect(noDubsArray.length).to.eql(6, "The length of the array should be 6");
    expect(noDubsArray[2]).to.eql(1);
    expect(noDubsArray[5]).to.eql(5);
  });
  it("should remove multiple duplicates from array", function() {
    var arr = [2, 7, 2, 1, 8, 8, 4];
    var noDubsArray = removeDuplicates(arr);
    expect(noDubsArray.length).to.eql(5, "The length of the array should be 5");
    expect(noDubsArray[2]).to.eql(1);
    expect(noDubsArray[4]).to.eql(4);
  });
  it("should remove multiple duplicates from array even if the duplicates are consecutive", function() {
    var arr = [2, 7, 2, 8, 8, 1, 4];
    var noDubsArray = removeDuplicates(arr);
    expect(noDubsArray.length).to.eql(5, "The length of the array should be 5");
    expect(noDubsArray[2]).to.eql(8);
    expect(noDubsArray[4]).to.eql(4);
  });
});
