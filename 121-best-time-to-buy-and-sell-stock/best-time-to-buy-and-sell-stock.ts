function maxProfit(prices: number[]): number {
  let min = Infinity;
  let max = 0;

  for (let price of prices) {
    min = Math.min(price, min);
    max = Math.max(price - min, max);
  }

  return max;
};