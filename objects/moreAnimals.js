// Create an array called moreAnimals of 3 objects of 3 different animals with the key
// names of species, name, age, gender & favoriteFood.

class Animal {
  constructor(species, name, age, gender, favoriteFood) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.favoriteFood = favoriteFood;
  }

}

var moreAnimals = [];
var wilbur = new Animal("pig","wilbur", 3, "m", "slop")
moreAnimals.push(wilbur)
var charlotte = new Animal("spider","charlotte", 1, "f", "bugs")
moreAnimals.push(charlotte)
var templeton = new Animal("rat", "templeton", 2, "m", "smorgasbord")
moreAnimals.push(templeton)

// DO NOT DELETE
module.exports = moreAnimals;
