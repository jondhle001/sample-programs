let guessNumber = require("./program1")

test('guess wrong number', () => {
  expect(guessNumber.guessNumber(5)).toBe(false);
});