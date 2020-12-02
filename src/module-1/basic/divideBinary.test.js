const utilities = require('../utilities');
const divideBinary = require('./divideBinary');

const NUM_OF_TESTS = 20;

for (let i = 0; i < NUM_OF_TESTS; i++) {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);

    let binaryArrayA = utilities.convertToBinary(a);
    let binaryArrayB = utilities.convertToBinary(b);
    let binaryArrayQuotient = utilities.convertToBinary(a / b);

    test(
      `expect [${binaryArrayA.toString()}] + [${binaryArrayB.toString()}] to be [${binaryArrayQuotient.toString()}]`,
      () => {
        let product = divideBinary(binaryArrayA, binaryArrayB).toString();
        let expected = binaryArrayQuotient.toString();

        expect(product).toBe(expected);
    });
}
