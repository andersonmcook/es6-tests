var expect = require('chai').expect;

describe('destructuring', function () {
  it('des 1', function () {
    function makeSound ({species, sounds}) {
      return `The ${species} ${sounds}.`;
    }
  expect(makeSound({species: 'bird', sounds: 'chirps'})).to.equal("The bird chirps.");
  });

  it('des 2', function () {
    function getAnimal () {
      return {
        legs: 4,
        eyes: 2,
        wings: "no"
      }
    }
    var {legs, eyes, wings} = getAnimal();
    expect(legs).to.equal(4);
    expect(eyes).to.equal(2);
    expect(wings).to.equal("no");
  });
});
