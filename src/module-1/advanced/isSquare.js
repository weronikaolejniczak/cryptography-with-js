/**
 * Algorithm which checks whether an element is a square modulo p
 *
 * Input: prime number p, natural number 0 < m < p
 *
 * Output:
 *  'yes' if m is a square modulo p,
 *  'no' if m is not a square modulo p
 *
 * Hint: use Euler theorem to check that.
 */
const utilities = require('../utilities');

function isSquare(p, m) {
    p = utilities.convertToDecimal(p.join(''));
    m = utilities.convertToDecimal(m.join(''));
    m = m % p;

    for (let i = 2; i < p; i++) {
        if ((i * i) % p == m) {
            return 'yes';
        }
    }

    return 'no';
}

module.exports = isSquare;
