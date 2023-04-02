const { greet } = require('./index.js');

describe ('greeting functions', () => {
  test('Marcus', () => {
    expect(greet('Marcus')).toEqual('Welcome to SALT, Marcus');
  });
  test('Eliza', () => {
    expect(greet('Eliza')).toEqual('Welcome to SALT, Eliza');
  });
});






// const assert = require("assert");

// describe("great function", () => {
//   it("should greet Marcus properly", () => {
//     const greeter = require('./index.js');
//     const actualResult = greeter.greet('Marcus');
//     assert.equal('Welcome to SALT, Marcus', actualResult);
//   });
// });

// test('should greet Eliza properly', () => {
//   const greet = 'Welcome to SALT, Eliza';
//   expect(greet(greet)).toEqual(greet)
// });