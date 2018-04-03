const chai = require('chai');
var copyCat = require('../../arrays/copyCat.js') ;

var expect = chai.expect;

xdescribe('Array Exercise - copyCat()', function () {
  it('should copy the 2nd and 3rd index', function () {
    var arr = [1, 2, 3, 4]
    var copycatArray = copyCat(arr)
    expect(copycatArray.length).to.eql(2)
    expect(copycatArray[0]).to.eql(3)
    expect(copycatArray[1]).to.eql(4)
  })
})
