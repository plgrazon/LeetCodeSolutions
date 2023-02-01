/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    const isEven = n % 2 === 0;
    const length = isEven ? n - 1 : n

    return isEven ?  `${'a'.repeat(length)}b` : `${'a'.repeat(length)}`;
};