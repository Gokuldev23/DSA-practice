/**
 * ✅ Solved on 2025-08-11
 * Leetcode #189
 * Approach: Two-Pointers
 * Time: O(n), Space: O(1)
 * Where n = array.length
 */

// rotate arr by k times not only k elements
const rotateArr = (array: number[], k: number) => {
  const length = array.length;
  k = k % length;

  array.reverse();
  const reverse = (l: number, r: number) => {
    while (l < r) {
      [array[l], array[r]] = [array[r], array[l]];
      l++;
      r--;
    }
  };

  reverse(0, k - 1);
  reverse(k, length - 1);
  return array;
};

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
