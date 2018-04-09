const chai = require('chai');
var makeNoise = require('../../objects/makeNoise.js') ;

var expect = chai.expect;

xdescribe('Object Exercise - makeNoise()', function () {
  it('should return the result of a noise function', function () {
    var noise = makeNoise({ noise: function () { return 'hello' } })
    expect(noise).to.eql('hello')
  })
})
