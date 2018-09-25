var chai = require("chai");
var animals = require("../../lists/animals.js");
var oldAnimals = require("../../lists/oldAnimals");

var expect = chai.expect;

xdescribe("List Exercise - oldAnimals", function() {
  it("should return all old animals", function() {
    var old = [
      {
        species: "Primate",
        name: "Coco",
        age: 10,
        gender: "female",
        favoriteFood: "Banana"
      },
      {
        species: "Elephant",
        name: "Jumbo",
        age: 22,
        gender: "male",
        favoriteFood: "Apples"
      }
    ];

    module.exports = animals;

    expect(old).to.deep.equal(oldAnimals);
  });
});
