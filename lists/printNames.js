/* Review the animals.js file in this folder and the array of animal objects in it.
 * Write a function printNames that prints the names of all animals.
 * Try to come up with different variations of your function!
 */

var animals = require("./animals.js");

// ES6
var printNames = animals => {
  animals.forEach(animal => console.log(animal.name));
};

// ES5
var printNames = function(animals) {
  animals.forEach(function printAnimalName(animal) {
    console.log(animal.name);
  });
};

// Good Old For Loop
var printNames = function(animals) {
  for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].name);
  }
};

// DO NOT DELETE
module.exports = printNames;
