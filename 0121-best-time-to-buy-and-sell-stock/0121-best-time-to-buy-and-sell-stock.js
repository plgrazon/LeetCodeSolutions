/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let min = Infinity;
  
  for (let price of prices) {
    if (price < min) {
      min = price;
    } else {
      max = Math.max(max, price - min);
    }
  }
  
  return max;
};