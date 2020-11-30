const addBinary = require('./addBinary');

test('adds 1 + 2 to equal 3', () => {
  expect(addBinary(1, 2)).toBe(3);
});
