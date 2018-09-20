// Create a function called getKeys that takes in the animal object and returns all
// of the key names.

var animal;
var getKeys = (ob) => {
  let keys = []
  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      keys.push(key)
    }
  }
  return keys
};

// DO NOT DELETE
module.exports = getKeys;
