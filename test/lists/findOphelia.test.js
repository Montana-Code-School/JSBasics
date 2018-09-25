var chai = require("chai");
var animals = require("../../lists/animals.js");
var findOphelia = require("../../lists/findOphelia.js");

var expect = chai.expect;

describe.only("List Exercise - findOphelia()", function() {
  it("should return Ophelia the cat", function() {
    var ophelia = {
      species: "Cat",
      name: "Ophelia",
      age: 6,
      gender: "female",
      favoriteFood: "Tuna"
    };

    expect(findOphelia(animals)).to.deep.equal(ophelia);
  });
});
