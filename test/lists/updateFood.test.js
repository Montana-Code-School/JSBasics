var chai = require("chai");
var animals = require("../../lists/animals.js");
var updateFood = require("../../lists/updateFood.js");

var expect = chai.expect;

xdescribe("List Exercise - updateFood()", function() {
  xit("should not change original array of animals", function() {
    let oldAnimals = JSON.parse(JSON.stringify(animals));
    updateFood(animals);
    expect(animals).to.deep.equal(oldAnimals);
  });
  it("should return new array of animals with their new favorite food", function() {
    var newAnimals = [
      {
        species: "Primate",
        name: "Coco",
        age: 10,
        gender: "female",
        favoriteFood: "Peanut Butter Cups"
      },
      {
        species: "Cat",
        name: "Ophelia",
        age: 6,
        gender: "female",
        favoriteFood: "Peanut Butter Cups"
      },
      {
        species: "Horse",
        name: "Beauty",
        age: 3,
        gender: "female",
        favoriteFood: "Peanut Butter Cups"
      },
      {
        species: "Elephant",
        name: "Jumbo",
        age: 22,
        gender: "male",
        favoriteFood: "Peanut Butter Cups"
      },
      {
        species: "Bird",
        name: "Twiti",
        age: 7,
        gender: "male",
        favoriteFood: "Peanut Butter Cups"
      }
    ];

    expect(updateFood(animals)).to.deep.equal(newAnimals);
  });
});
