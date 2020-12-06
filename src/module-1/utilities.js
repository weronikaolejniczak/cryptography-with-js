function convertToBinary(num) {
    return (num >>> 0).toString(2).split('');
}

function convertToDecimal(binary) {
    return parseInt(binary, 2);
}

function prepareData(x) {
    if (Array.isArray(x)) {
        return convertToDecimal(x.join(''));
    }

    return x;
}

function GCD(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }

  return x;
}

module.exports = {
    convertToBinary,
    convertToDecimal,
    prepareData,
    GCD
}
