function convertToBinary(num) {
    return (num >>> 0).toString(2).split('');
}

module.exports = {
    convertToBinary
}
