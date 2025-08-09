/**
 * ✅ Solved on 2025-08-09
 * Leetcode #33
 * Approach: Binary Search
 * Time: O(n), Space: O(1)
 * Where n = nums.length
 */



const search = (nums:number[],target:number) => {
    let k = -1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] < 0) {
        k = i - 1;
        break;
      }
    }
    let l = 0;
    let r = nums.length - 1;
    if (target <= nums[r]) {
      l = k + 1;
    } else {
      r = k;
    }
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (nums[mid] == target) return mid;
      if (nums[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2],4));
