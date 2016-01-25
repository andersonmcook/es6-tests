var expect = require('chai').expect;

describe('template strings', function () {
  it('should be a string', function () {
    var string = `abc`;
    expect(string).to.be.a("string");
  });

  it('can evaluate variables', function () {
    var bar = 'baz';
    var string = `foo ${bar}`;

    expect(string).to.equal('foo baz');
  });

  it('can execute functions', function () {
    var string = `The date is: ${new Date()}`;
    var date = new Date();
    expect(string).to.equal("The date is: " + date);
  });

  it('can print multiline strings', function () {
    var string = `hey
yo`;
    expect(string).to.equal("hey\nyo");
  });

  it('can evaluate expresions', function () {
    var string = `${3 + 6}`;
    expect(string).to.equal("9");
  });
});

