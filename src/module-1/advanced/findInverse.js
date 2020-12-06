/**
 * Finding an inverse modulo n
 *
 * Input: natural number n > 1, natural number 0 ≤ a < n
 *
 * Output:
 *  a message that GCD(a, n) > 1
 *  or 
 *  a number 0 ≤ b < n such that n ∣ (ab − 1).
 *
 * WARNING: empty list [] on output means that there was no inverse.
 */
const utilities = require('../utilities');

function recInversion(a, n, b, c) {
    if (a % n == 0) {
        b = 0;
        c = 1;

        return;
    }

    recInversion(n, a % n, b, c);

    let temp = b;

    b = c;
    c = temp - c * (a / n);
}

function findInverse(a, n) {
    let A = utilities.convertToDecimal(a.join(''));
    let N = utilities.convertToDecimal(n.join(''));

    if (utilities.GCD(A, N) > 1) {
        return [];
    }

    let b, c;
    recInversion(A, N, b, c);

    if (b < 0) b += N;

    return utilities.convertToBinary(b);
}

module.exports = findInverse;
