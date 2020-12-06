/**
 * Fast power algorithm
 *
 * Input: natural number n > 1, natural number k ≥ 1, natural number 2 ≤ b < n.
 *
 * Output: b^k mod n.
 */
const utilities = require('../utilities');

function fastPower(b, k, n) {
    let result = 1;
    let base = utilities.convertToDecimal(b.join(''));
    let power = utilities.convertToDecimal(k.join(''));
    let mod = utilities.convertToDecimal(n.join(''));

    if (base == 0) return 0;

    while (power > 0) {
        if (power & 1) {
            result = (result * base) % mod;
        }
        
        base = (base * base) % mod;
        power >>= 1;
    }

    result = utilities.convertToBinary(result);
    return result;
}

module.exports = fastPower;
