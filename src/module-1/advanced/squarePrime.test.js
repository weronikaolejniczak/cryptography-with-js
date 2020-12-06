const squarePrime = require('./squarePrime');

const TESTS = [
    [[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 1, 0]],
    [[1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1], []],
    [[1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1], [1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0], []],
    [[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 0, 0, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 1, 1, 1]],
    [[1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0], []],
    [[1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 1, 0, 1, 1], []],
    [[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 1, 0, 1, 0, 0], []],
    [[1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1], [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0]],
    [[1, 1, 0, 1, 0, 0, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1, 0, 0]],
    [[1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1], [1, 0, 0, 0, 1, 1, 0, 0, 0], []],
    [[1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0], [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1]],
    [[1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1], [1, 1, 0, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0]],
    [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1, 0], []],
    [[1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1], [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0], []],
    [[1, 1, 1, 1, 1], [1, 1, 1, 1, 0], []],
    [[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1, 1], [1, 1, 0, 0, 1, 0, 1, 1, 0]],
    [[1, 0, 0, 1, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 0, 1]],
    [[1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1], [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1], []],
    [[1, 1, 1, 1, 1], [1, 0], [1, 0, 0, 0]],
    [[1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], [1, 1, 0, 1, 0, 1, 0, 0, 0, 0], [1, 1, 0, 0, 1, 0, 0, 0]],
    [[1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1, 0, 1, 1], []],
    [[1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1], [1, 0, 1, 1, 1, 0, 0, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1]]
];

for (let i = 0; i < TESTS.length; i++) {
    let p = TESTS[i][0];
    let m = TESTS[i][1];
    let result = TESTS[i][2];

    test(
        result != []
        ? `expect [${m.toString()}] to be square modulo [${p.toString()}] such that b = [${result.toString()}]`
        : `expect [${m.toString()}] to NOT be square modulo [${p.toString()}]`,
      () => {
        let squarePrimeResult = squarePrime(p, m).toString();

        expect(squarePrimeResult).toBe(result.toString());
    });
}
