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
    let base = utilities.prepareData(b);
    let power = utilities.prepareData(k);
    let mod = utilities.prepareData(n);

    while (power > 0) {
        if (power & 1) {
            result = (result * base) % mod;
            power = power - 1;
        }
        
        power = power / 2;
        base = (base * base) % mod;
    }

    result = utilities.convertToBinary(result);
    return result;
}

module.exports = fastPower;
