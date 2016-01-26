"use strict"
var expect = require('chai').expect;

describe('block scope', function () {
  it('block scope', function () {
    var fn = function () {
      let three = 3;
      console.log("three outside", three);
      if (true) {
        let three = "four";
        console.log("three inside", three);
      }
      return three;
    };
    expect(fn()).to.equal(3);
  });
});
