function convertToBinary(num) {
    return (num >>> 0).toString(2).split('');
}

function convertToDecimal(binary) {
    return parseInt(binary, 2);
}

module.exports = {
    convertToBinary,
    convertToDecimal
}
