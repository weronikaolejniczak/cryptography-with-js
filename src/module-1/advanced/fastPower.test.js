const utilities = require('../utilities');
const fastPower = require('./fastPower');

const NUM_OF_TESTS = 20;

for (let i = 0; i < NUM_OF_TESTS; i++) {
    let n = Math.floor(Math.random() * 25);
    let b = Math.floor(Math.random() * (n - 1)) + 2;
    let k = Math.floor(Math.random() * 25);

    let binaryArrayB = utilities.convertToBinary(b);
    let binaryArrayK = utilities.convertToBinary(k);
    let binaryArrayN = utilities.convertToBinary(n);

    let result = Math.pow(b, k) % n;
    result = utilities.convertToBinary(result);

    test(
      `expect [${binaryArrayB.toString()}] ^ [${binaryArrayK.toString()}]
      % [${binaryArrayN.toString()}] to be [${result.toString()}]`,
      () => {
        let fastPowerResult = fastPower(binaryArrayB, binaryArrayK, binaryArrayN).toString();

        expect(fastPowerResult).toBe(result.toString());
    });
}
