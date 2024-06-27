function maxProfit(prices: number[]): number {
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    let prev = prices[i - 1];
    let curr = prices[i];

    if (prev >= curr) {
      // do nothing
    } else {
      max += (curr - prev);
    }
  }

  return max;
};