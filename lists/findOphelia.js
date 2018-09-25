/* Review the animals.js file in this folder and the array of animal objects in it.
 * Write a function findOphelia that returns the Ophelia the Cat.
 * Try to come up with different variations of your function! 
 * Try to solve it without using a for loop!
 */

// ES6
var findOphelia = animals => {
  return animals.find(animal => animal.name === "Ophelia");
};

// ES5
var findOphelia = function(animals) {
  return animals.find(function findByAnimalName(animal) {
    if (animal.name === "Ophelia") {
      return animal;
    }
  });
};

// Good Old For Loop
var findOphelia = function(animals) {
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].name === "Ophelia") {
      return animals[i];
    }
  }
};

// DO NOT DELETE
module.exports = findOphelia;
