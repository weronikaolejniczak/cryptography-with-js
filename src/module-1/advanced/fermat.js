/**
 * Algorithm which checks the primality using Fermat's test
 *
 * Input: natural number 1 < n, natural number N
 *
 * Output: 'yes' if the natural number a was a composite number witness of n;
 * if after N we have not obtained a composite number certificate, we return 'no conclusion'
 *
 * WARNING: choose witness in the range 1 < a < n which are co-prime with n and random.
 */
const utilities = require('../utilities');
const fastPower = require('./fastPower');

function isPrime(n, N) {
    for (let trial = 0; trial < N; trial++){
        // generate a between 2 and n - 2
        let a = Math.floor((Math.random() * (n - 2))) + 2;

        // check if common factor exists
        if (utilities.GCD(a, n) !== 1) {
            // factor was found, therefore composite
            return false;
        }

        // Fermat test
        if (fastPower(a, n - 1, n) !== 1) {
            // must be composite
            return false;
        }
    }

    return true;
}

function fermat(n, N) {
    if (isPrime(n, N) === true) {
        return 'no';
    } else {
        return 'yes';
    }
 };

module.exports = fermat;
