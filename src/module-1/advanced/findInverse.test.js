const findInverse = require('./findInverse');

const TESTS = [
    [[1, 1, 0, 0, 1, 0, 0, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [1, 1, 0], []],
    [[1, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 1, 1, 0, 1], [1], [1, 1, 0, 0, 0, 0, 0]],
    [[1, 1, 0, 1, 0, 0], [1, 1, 0, 1, 1, 0, 1, 1, 0], [1, 0], []],
    [[1, 1, 1, 0, 1, 1, 1], [1, 0, 1, 0, 1, 1, 0, 1, 0], [1], [1, 0, 1, 1, 1, 1, 0, 1]],
    [[1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 1, 1, 1], [1, 1], []],
    [[1, 1, 1, 0, 1, 0, 1], [1, 1, 0, 0, 0, 1, 1, 0, 1, 1], [1, 1], []],
    [[1, 0, 1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1], [1, 0, 1, 0, 1, 0, 1, 0, 1, 1]],
    [[1, 1, 1, 1, 0, 0, 0, 1], [1, 0, 0, 1, 0, 1, 1, 0, 0, 1], [1], [1, 1, 0, 0, 1, 0, 1, 0]],
    [[1, 1, 0, 0, 0, 1, 0, 1, 1], [1, 0, 1, 0, 1, 0, 0, 1, 1, 1], [1], [1, 1, 0, 1, 0, 0, 0, 0]],
    [[1, 0, 0, 1, 1, 0, 0, 1, 0], [1, 1, 1, 0, 1, 0, 0, 0, 1, 0], [1, 1, 0], []],
    [[1, 0, 1, 1, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1], [1], [1, 1, 1, 0, 0, 0, 1]],
    [[1, 1, 1, 0, 1, 0], [1, 0, 1, 0, 0, 0, 0, 0], [1, 0], []],
    [[1, 0, 0, 0, 0, 1, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 1, 0], [1], [1, 0, 1, 0, 1, 1]],
    [[1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 0, 1, 0], []],
    [[1, 0, 0, 1, 1, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0], []],
    [[1, 1, 1, 0, 1, 0, 0, 1, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 1], [1], [1, 1, 0, 1, 1, 1, 1, 1]],
    [[1, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 1, 0, 0, 1, 1, 1], [1], [1, 0, 0, 1, 0, 1, 0, 1, 1, 1]],
    [[1, 0, 0, 1, 1, 0, 1], [1, 0, 1, 0, 0, 0, 0, 1, 0, 1], [1], [1, 0, 0, 1, 0, 0, 0, 0, 1, 0]],
    [[1, 0, 1, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 1], [1], [1, 0, 0, 1, 0, 0, 0, 1, 1]],
    [[1, 0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1], [1, 1, 1, 0, 0, 1, 1, 0, 1]]
];

for (let i = 0; i < TESTS.length; i++) {
    let a = TESTS[i][0];
    let n = TESTS[i][1];
    let result = TESTS[i][3];

    test(
        `expect [${a.toString()}] modulo [${n.toString()}] to be [${result.toString()}]`,
        () => {
            let findInverseResult = findInverse(a, n).toString();

            expect(findInverseResult).toBe(result.toString());
    });
}