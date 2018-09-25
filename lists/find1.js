var animals = require("./animals.js");

// Find is for idiots, because only idiots get lost. I've never been lost, sometimes I
// take a lot of detours though.

// -Georgie Kirschner

// Fill in the string on line 7 to find the cat object in the animals array.
// You should see the object
// {
//   species: "Cat",
//   name: "Ophelia",
//   age: 6,
//   gender: "female",
//   favoriteFood: "Tuna"
// }
// being logged.

const cat = animals.find(animal =>{
  if (animal.species === ''){
    return true;
  } else{
    return false;
  }
});

console.log(cat);


// DO NOT DELETE
module.exports = printNames;