/* Famous Quote: "Find is for idiots, because only idiots get lost. 
 * I've never been lost, sometimes I take a lot of detours though."
 * - Georgie Kirschner
 */

var animals = require("./animals.js");

/*
 * Array Find() Method
 * Reading Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * 
 * Review the animals.js file in this folder and the array of animal objects in it.
 * Replace the condition on line 17 to find the elephant object in the animals array.
 */

var elephant = animals.find(animal => {
  if (animal.species === "Elephant") {
    return animal;
  }
});

// DO NOT DELETE
module.exports = elephant;
