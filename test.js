const assert = require("assert");

describe("great function", () => {
  it("should greet Marcus properly", () => {
    const greeter = require('./index.js');
    const actualResult = greeter.greet('Marcus');
    assert.equal('Welcome to SALT, Marcus', actualResult);
  });
});