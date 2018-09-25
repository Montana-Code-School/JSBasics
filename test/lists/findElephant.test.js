var chai = require("chai");
var animals = require("../../lists/animals.js");
var elephant = require("../../lists/findElephant.js");

var expect = chai.expect;

xdescribe("List Exercise - findElephant()", function() {
  it("should return Jumbo the elephant", function() {
    var jumbo = {
      species: "Elephant",
      name: "Jumbo",
      age: 22,
      gender: "male",
      favoriteFood: "Apples"
    };

    expect(elephant).to.deep.equal(jumbo);
  });
});
