/**
 * Algorithm which finds a square root of a square modulo p
 *
 * Input: prime number p congruent to 3 modulo 4, natural number 1 < m < p
 *
 * Output:
 *  if m is not a square modulo p, return 0 (or empty array),
 *  if m is a square modulo p, return a number 1 < b < p such that p | (b2 − a)
 *
 * Hint: apply Euler theorem.
 */
const utilities = require('../utilities');

function isCongruent(p) {
    if (p % 4 == 3)
        return true;
    else
        return false;
}

function squarePrime(p, m) {
    p = utilities.convertToDecimal(p.join(''));
    m = utilities.convertToDecimal(m.join(''));

    if (!isCongruent) return [];

    m = m % p;

    for (let i = 2; i < p; i++) {
        if ((i * i) % p == m) {
            return utilities.convertToBinary(i);
        }
    }

    return [];
}

module.exports = squarePrime;
