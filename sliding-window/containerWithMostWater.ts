/**
 * ✅ Solved on 2025-08-25
 * Leetcode #11
 * Approach: Sliding window + Two Pointers
 * Time: O(n), Space: O(1)
 * Where n = height.length
 */

const maxArea = (height: number[]) => {
  let max = -Infinity;

  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let leftEl = height[l];
    let rightEl = height[r];
    let minHeight = Math.min(leftEl, rightEl);
    let width = r - l;
    max = Math.max(max, width * minHeight);
    if (rightEl > leftEl) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

// Input:
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
