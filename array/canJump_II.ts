/**
 * ✅ Solved on 2025-08-18
 * Leetcode #45
 * Approach: Array
 * Time: O(n), Space: O(1)
 * Where n = nums.length
 */

const jumpCount = (nums: number[]): number => {
  if (nums.length === 1) return 0;
  let nextJump = 0;
  let prevInd = 0;
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextJump = Math.max(nextJump, nums[i] + i);
    if (i === prevInd) {
      count++;
      prevInd = nextJump;
    }
  }
  return count;
};

console.log(jumpCount([1, 2, 2, 0, 2, 0, 1]));
