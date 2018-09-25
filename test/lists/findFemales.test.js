var chai = require("chai");
var animals = require("../../lists/animals.js");
var findFemales = require("../../lists/findFemales.js");

var expect = chai.expect;

describe.only("List Exercise - findFemales()", function() {
  it("should return all female animals", function() {
    var females = [
      {
        species: "Primate",
        name: "Coco",
        age: 10,
        gender: "female",
        favoriteFood: "Banana"
      },
      {
        species: "Cat",
        name: "Ophelia",
        age: 6,
        gender: "female",
        favoriteFood: "Tuna"
      },
      {
        species: "Horse",
        name: "Beauty",
        age: 3,
        gender: "female",
        favoriteFood: "Carrot"
      }
    ];
    expect(findFemales(animals)).to.deep.equal(females);
  });
});
