/**
 * ✅ Solved on 2025-07-28
 * Leetcode #16
 * Approach: Two-Pointers
 * Time: O(n^2), Space: O(1)
 * Where n = array.length
 */

const threeSumClosest = (array: number[], target: number) => {
  array.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (i > 0 && array[i] === array[i - 1]) continue;
    const element = array[i];

    let l = i + 1;
    let r = array.length - 1;

    while (l < r) {
      let sum = element + array[l] + array[r];

      if (Math.abs(target - sum) < Math.abs(minDiff - target)) {
        minDiff = sum;
      }
      if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }

  return minDiff;
};

let array = [2, 1, 1, 0, 4, 6];
let target = 1;
console.log(threeSumClosest(array, target));
