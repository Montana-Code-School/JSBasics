/* Review the animals.js file in this folder and the array of animal objects in it.
 * Write a function findFemales that returns all female animals.
 * Try to come up with different variations of your function! 
 * Try to solve it without using a for loop!
 */

var findFemales = animals => {
  return animals.filter(animal => animal.gender === "female");
};

// DO NOT DELETE
module.exports = findFemales;
