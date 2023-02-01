/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    const isEven = n % 2 === 0;
    const length = isEven ? n - 1 : n
    let str = '';

    for (let i = 0; i < length; i++) {
        str += 'a';
    }

    return isEven ? str + 'b' : str;
};