/**
 * ✅ Solved on 2025-08-16
 * Leetcode #155
 * Approach: Array 
 * Time: O(n), Space: O(1)
 * Where n = nums.length
 */

const canJump = (nums: number[]) => {
  let len = nums.length - 1;
  let target = len;
  for (let i = len - 1; i >= 1; i--) {
    if (nums[i] == 0) {
      continue;
    }
    if (nums[i] + i >= target) {
      target = i;
    }
  }
  return nums[0] >= target;
};

console.log(canJump([2, 0, 1, 0, 1]));
