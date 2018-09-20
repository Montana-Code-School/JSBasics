var chai = require('chai');
var sortedArr = require('../../objects/sortByName.js');

var expect = chai.expect;
var assert = chai.assert;

describe("Object Array Exercise - sortbyName()", function(){
  it('should return sorted array', function () {
    let animals = [
      { species: 'Primate', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana'},
      { species: 'Cat', name: 'Ophelia', age: 6, gender: 'female', favoriteFood: 'Tuna'},
      { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot'},
      { species: 'Elephant', name: 'Jumbo', age: 22, gender: 'male', favoriteFood: 'Apples'},
      { species: 'Bird', name: 'Twiti', age: 7, gender: 'male', favoriteFood: 'Seeds'},
    ];
    let sortA = sortedArr(animals)
    expect(sortA.length).to.eql(5);
    expect(sortA[0].name).to.eql('Beauty');
    expect(sortA[1].name).to.eql('Coco');
    expect(sortA[2].name).to.eql('Jumbo');
    expect(sortA[3].name).to.eql('Ophelia');
    expect(sortA[4].name).to.eql('Twiti');
  })
});
