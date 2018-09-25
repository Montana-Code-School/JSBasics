var animals = require("./animals.js");

// Maps are for idiots. I just use my instincts to travel everywhere. 
// - Georgie Kirschner

// In this exercise, instead of returning 'animal', return an object that includes everything in animal, 
// but change the value of favoriteFood to be 'My favorite food is' + animal.favoriteFood.
// i.e. animal Horse's object.favoriteFood = 'my favorite food is carrot'

// P.S. Notice how we write a separate function and passed it into map. Cool, right?

const addFavFoodStr = animal => {
  return animal;
};

const mappedAnimals = animals.map(addFavFoodStr);


// DO NOT DELETE
module.exports = mappedAnimals;