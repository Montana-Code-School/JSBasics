const chai = require('chai');
var getKeys = require('../../objects/getKeys.js') ;

var expect = chai.expect;

xdescribe('Object Exercise - getKeys()', function () {
    it('should return an array of all of the keys', function () {
      var animal = {
        species: 'primate',
        name: 'monkey',
        age: 8,
        gender: 'male',
        favoriteFood: 'Banana'
      }
      var keys = getKeys(animal);
      expect(keys).to.have.lengthOf(5);
      expect(keys[0]).eql('species');
      expect(keys[1]).eql('name');
      expect(keys[2]).eql('age');
      expect(keys[3]).eql('gender');
      expect(keys[4]).eql('favoriteFood');
    })
  })
