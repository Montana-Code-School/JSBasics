var animals = require("./animals.js");

// Filter is a method that goes over each element in an array and returns any that pass a 'test' - a function
// that either returns true or false. If the function returns true, then that object will included in the 'filtered'
// array.

// Below, we almost have a way to grab all the old animals in the animals array, but it's not quite working.
// Edit the 'callback' function below to return true if the animal is older than 9.

// Only wimps need filters. I can handle anything.
// - Georgie Kirschner

const oldAnimals = animals.filter( animal => {
  if (animal.age){
    return true;
  } else {
    return false;
  }
});


// DO NOT DELETE
module.exports = oldAnimals;