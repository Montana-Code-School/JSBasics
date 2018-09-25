/**
 * He's terrible at directions. He once drove us to the wrong state
 * because he was following his 'instincts.'
 * - Mark Buckner
 */

var animals = require("./animals.js");

/**
 * Array filter() Method
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * Filter is a method that goes over each element in an array and returns any that pass
 * a 'test' - a function that either returns true or false. If the function returns true,
 * then that object will included in the 'filtered' array.
 *
 * Review the animals.js file in this folder and the array of animal objects in it.
 * Below, we almost have a way to grab all the old animals in the animals array,
 * but it's not quite working. Edit the 'callback' function below to return true
 * if the animal is older than 9.
 */

const oldAnimals = animals.filter(animal => {
  if (true) {
    return true;
  } else {
    return false;
  }
});

// DO NOT DELETE
module.exports = oldAnimals;
