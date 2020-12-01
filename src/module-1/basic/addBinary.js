/**
 * School addition algorithm
 *
 * Input: two binary sequences representing non-negative integers a, b
 *  a = (ak − 1, …, a0)2,
 *  b = (bl − 1, …, b0)2
 * of length k and l respectively, ai, bi ∈ {0, 1}
 * where
 *  a = ∑(k − 1)(i = 0) ai2i,
 *  a = ∑(l − 1)(i = 0) bi2i
 *
 * Output: binary sequence c which represents the sum c = a + b.
 */

function addBinary(a, b) {
    const c = [];
    let carry = 0;
    let tmp = 0;

    a.reverse();
    b.reverse();

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] == 0 && b[i] == 0) {
            if (carry == 0) {
                tmp = 0;
            } else {
                tmp = 1;
            }

            carry = 0;
        } else if (a[i] == 1 && b[i] == 1) {
            if (carry == 0) {
                tmp = 0;
            } else {
                tmp = 1;
            }

            carry = 1;
        } else {
            if (carry == 0) {
                tmp = 1;
                carry = 0;
            } else {
                tmp = 0;
                carry = 1;
            }
        }

        c.push(tmp);
    }

    if (a.length > b.length) {
        for (let i = b.length; i < a.length; i++) {
            if (a[i] == 0 && carry == 1) {
                c.push(1);
                carry = 0;
            } else if (a[i] == 1 && carry == 1) {
                c.push(0);
                carry = 1;
            } else {
                c.push(a[i]);
            }
        }
    } else if (a.length < b.length) {
        for (let i = a.length; i < b.length; i++) {
            if (b[i] == 0 && carry == 1) {
                c.push(1);
                carry = 0;
            } else if (b[i] == 1 && carry == 1) {
                c.push(0);
                carry = 1;
            } else {
                c.push(b[i]);
            }
        }
    }

    if (carry == 1) c.push(carry);
    c.reverse();

    return c;
}

module.exports = addBinary;
