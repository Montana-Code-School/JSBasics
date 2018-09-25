var animals = require("./animals.js");

// map is a great array method! It works by iterating over each element in an array, manipulating each element,
// and returning a new array of the manipulated elements. That's right! Mapping isn't just for cartographers
// anymore.


// Firstly, write a console log on line 11 and watch how map goes over each animal.

// Notice how we go over every element

// Lastly, instead of returning animal, return a different thing (it can be anything) and watch
// how the 'completely mapped animals' array (mappedAnimals) changes. Keep the console log in there.
// Notice how despite what we return we still iterate over each element!


const mappedAnimals = animals.map(animal => {

  return animal;
});

console.log('completely mapped animals:', mappedAnimals);


var printNames;

// DO NOT DELETE
module.exports = printNames;