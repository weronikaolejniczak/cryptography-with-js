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

    const A = a;
    A.reverse();
    const B = b;
    B.reverse();

    for (let i = 0; i < Math.min(A.length, B.length); i++) {
        if (A[i] == 0 && B[i] == 0) {
            if (carry == 0) {
                tmp = 0;
            } else {
                tmp = 1;
            }

            carry = 0;
        } else if (A[i] == 1 && B[i] == 1) {
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

    if (A.length > B.length) {
        for (let i = B.length; i < A.length; i++) {
            if (A[i] == 0 && carry == 1) {
                c.push(1);
                carry = 0;
            } else if (A[i] == 1 && carry == 1) {
                c.push(0);
                carry = 1;
            } else {
                c.push(A[i]);
            }
        }
    } else if (A.length < B.length) {
        for (let i = A.length; i < B.length; i++) {
            if (B[i] == 0 && carry == 1) {
                c.push(1);
                carry = 0;
            } else if (B[i] == 1 && carry == 1) {
                c.push(0);
                carry = 1;
            } else {
                c.push(B[i]);
            }
        }
    }

    if (carry == 1) c.push(carry);
    c.reverse();

    return c;
}

module.exports = addBinary;
