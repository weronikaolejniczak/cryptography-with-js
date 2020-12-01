const utilities = require('../utilities');
const addBinary = require('./addBinary');

for (let i = 0; i < 20; i++) {
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);

    binaryArrayA = utilities.convertToBinary(a);
    binaryArrayB = utilities.convertToBinary(b);
    binaryArraySum = utilities.convertToBinary(a + b);

    test(
      `[${binaryArrayA.toString()}] + [${binaryArrayB.toString()}] = [${binaryArraySum.toString()}]`, () => {
      expect(addBinary(binaryArrayA, binaryArrayB).toString()).toBe(binaryArraySum.toString());
    });
}
