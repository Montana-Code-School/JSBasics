var chai = require('chai');
var countString = require('../../arrays/countString.js');

var expect = chai.expect;

xdescribe("Array Exercise - countString()", function () {
  it('Will give us a number', function () {
    var val = countString("Ummm", 'm');
    expect(val).to.be.a('number');
  });

  it('Will return 3 for m or Ummm', function () {
    var val = countString("Ummm", 'm');
    expect(val).to.equal(3);
  });

  it('Will return 4 for "Bubble Bonanza!" for "b"', function () {
    var val = countString("Bubble Bonanza!", 'b');
    expect(val).to.equal(4);
  });

  it('Will return 4 for "Bubble Bonanza!" for "B"', function () {
    var val = countString("Bubble Bonanza!", 'B');
    expect(val).to.equal(4);
  });
});
