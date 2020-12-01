/**
 * School multiplication algorithm
 *
 * Input: two binary sequences representing non-negative integers a, b
 *  a = (ak − 1, …, a0)2,
 *  b = (bl − 1, …, b0)2
 * of length k and l respectively, ai, bi ∈ {0, 1}
 * where
 *  a = ∑(k − 1)(i = 0) ai2i,
 *  a = ∑(l − 1)(i = 0) bi2i
 *
 * Output: binary sequence c which represents the sum c = a ⋅ b.
 */
const addBinary = require('./addBinary');

function multiplyBinary(a, b) {
    c = [];

    const A = a;
    A.reverse();
    const B = b;
    B.reverse();

    for (let l = 0; l < B.length; l++) {
        let result = [];

        for (let k = 0; k < l; k++) {
            result.push(0);
        }

        for (let k = 0; k < A.length; k++) {
            result.push(B[l] * A[k]);
        }

        let tmp = result;
        tmp.reverse();

        if (c === []) {
            c = result;
            c.reverse();
        } else {
            c = addBinary(c, result);
        }
    }

    if (!c.find(elem => elem == 1)) {
        return [0]
    }

    return c;
}

module.exports = multiplyBinary;
