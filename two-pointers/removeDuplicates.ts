/**
 * ✅ Solved on 2025-08-14
 * Leetcode #26
 * Approach: Two-Pointers
 * Time: O(n), Space: O(1)
 * Where n = arr.length
 */

const removeDuplicates = (arr: number[]): number => {
  let l = 1;
  let r = 1;
  while (r < arr.length) {
    if (arr[r] !== arr[r - 1]) {
      arr[l] = arr[r];
      l++;
    }
    r++;
  }
  return l;
};

console.log(removeDuplicates([1, 1, 2, 2, 2, 2, 3, 3, 4, 4]));
