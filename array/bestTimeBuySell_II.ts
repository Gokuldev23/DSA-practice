/**
 * ✅ Solved on 2025-08-12
 * Leetcode #122
 * Approach: Array
 * Time: O(n), Space: O(1)
 * Where n = prices.length
 */

const maxProfit = (prices: number[]): number => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i];
    const prevPrice = prices[i - 1];
    if (currPrice > prevPrice) {
      profit += currPrice - prevPrice;
    }
  }
  return profit;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
