var chai = require("chai");
var sinon = require("sinon");
var animals = require("../../lists/animals.js");
var printNames = require("../../lists/printNames.js");

var assert = chai.assert;

xdescribe("List Exercise - printNames()", function() {
  it("should print names of all animals", function() {
    // "spy" on `console.log()`
    let spy = sinon.spy(console, "log");

    // call the function that needs to be tested
    printNames(animals);

    // assert that it was called with the correct value
    assert(spy.calledWith("Coco"));
    assert(spy.calledWith("Ophelia"));
    assert(spy.calledWith("Beauty"));
    assert(spy.calledWith("Jumbo"));
    assert(spy.calledWith("Twiti"));

    // restore the original function
    spy.restore();
  });
});
