const chai = require('chai');
var findSpecies = require('../../objects/findSpecies.js') ;

var expect = chai.expect;

describe('Object Arrays - findSpecies', function () {
    it('should be an array of length 3', function () {
      var arr = [{
          species: "primate"
        },{
          species: "cat"
        },{
          species: "horse"
        }
      ];
      var newarr = findSpecies(arr);
      console.log(newarr);
      expect(newarr.length).to.eql(3)
    })
    it('should return an array of the model values', function () {
      var arr = [{
          species: "primate"
        },{
          species: "cat"
        },{
          species: "horse"
        }
      ];
      expect(findSpecies(arr)[0]).to.eql("primate")
      expect(findSpecies(arr)[1]).to.eql("cat")
      expect(findSpecies(arr)[2]).to.eql("horse")

    })
  })
