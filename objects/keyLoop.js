// Create a function called keyLoop that takes in an object and loops through
// each of the key values. If any of the key values are equal to "monkey", then
// return "There's a monkey!", otherwise return "There's no monkey here!".

var keyLoop = (obj) => {
  for (let key in obj) {
    if(obj[key] == "monkey"){
      return "There's a monkey!"
    } else {
      return "There's no monkey here!"
    }
  }
};

// DO NOT DELETE
module.exports = keyLoop;
