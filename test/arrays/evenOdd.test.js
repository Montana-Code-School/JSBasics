const chai = require('chai');
var evenOdd = require('../../arrays/evenOdd.js') ;

var expect = chai.expect;

xdescribe('Array Exercise - evenOdd()', function () {
  it('Should return an array where even numbers correspond to even and odd to odd', function () {
    var arr = [1, 2, 3]
    var evenOddArr = evenOdd(arr)
    expect(evenOddArr.length).to.eql(3)
    expect(evenOddArr[0]).to.eql('odd')
    expect(evenOddArr[1]).to.eql('even')
    expect(evenOddArr[2]).to.eql('odd')
  })
})
