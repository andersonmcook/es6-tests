"use strict"
var expect = require('chai').expect;

describe('block scope', function () {
  it('block scope 1', function () {
    var fn = function () {
      let three = 3;
      //console.log("three outside", three);
      if (true) {
        let three = "four";
        //console.log("three inside", three);
      }
      return three;
    };
    expect(fn()).to.equal(3);
  });

  it('block scope 2', function () {
    var fn = function () {
      let array = [];
      for (let i = 0; i < 4; i++) {
        array.push(i);
      }
      return array.reduce((a, b) => a + b);
    };
    expect(fn()).to.equal(6);
  });
});
