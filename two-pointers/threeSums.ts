/**
 * ✅ Solved on 2025-07-25
 * Leetcode #15
 * Approach: Two-Pointers
 * Time: O(n^2), Space: O(k) — where k is the number of valid triplets in the result.
 * Where n = s.length, m = t.length
 */

function threeSums(nums: number[]) {
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const element = nums[i];
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = element + nums[l] + nums[r];
      if (sum === 0) {
        res.push([element, nums[l], nums[r]]);
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
}

console.log(threeSums([-1, 0, 1, 2, -1, -4]));
console.log(threeSums([0, 0, 0, 0]));
