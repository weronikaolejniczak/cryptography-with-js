const utilities = require('../utilities');
const addBinary = require('./addBinary');

const NUM_OF_TESTS = 20;

for (let i = 0; i < NUM_OF_TESTS; i++) {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);

    let binaryArrayA = utilities.convertToBinary(a);
    let binaryArrayB = utilities.convertToBinary(b);
    let binaryArraySum = utilities.convertToBinary(a + b);

    test(
      `expect [${binaryArrayA}] + [${binaryArrayB}] to be [${binaryArraySum}]`,
      () => {
        let sum = addBinary(binaryArrayA, binaryArrayB).toString();
        let expected = binaryArraySum.toString();

        expect(sum).toBe(expected);
    });
}
