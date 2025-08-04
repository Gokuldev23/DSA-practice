/**
 * ✅ Solved on 2025-08-03
 * Leetcode #121
 * Approach: Array with Two Pointers
 * Time: O(n), Space: O(1)
 * Where n = prices.length
 */

const bestTimeToBuySell = (prices: number[]): number => {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      l = r;
    }
    let priceDiff = prices[r] - prices[l];
    maxProfit = Math.max(priceDiff, maxProfit);
    r++;
  }
  return maxProfit;
};

let result = bestTimeToBuySell([7, 1, 5, 3, 6, 4]);

console.log(result);
