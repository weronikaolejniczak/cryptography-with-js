const utilities = require('../utilities');
const multiplyBinary = require('./multiplyBinary');

const NUM_OF_TESTS = 20;

for (let i = 0; i < NUM_OF_TESTS; i++) {
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);

    let binaryArrayA = utilities.convertToBinary(a);
    let binaryArrayB = utilities.convertToBinary(b);
    let binaryArrayProduct = utilities.convertToBinary(a * b);

    test(
      `expect [${binaryArrayA.toString()}] + [${binaryArrayB.toString()}] to be [${binaryArrayProduct.toString()}]`,
      () => {
        let product = multiplyBinary(binaryArrayA, binaryArrayB).toString();
        let expected = binaryArrayProduct.toString();

        expect(product).toBe(expected);
    });
}
