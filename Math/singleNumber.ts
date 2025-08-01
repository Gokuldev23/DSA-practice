/**
 * ✅ Solved on 2025-07-12
 * Leetcode #438
 * Approach: Ecludien Algorithm
 * Time: O(n), Space: O(n)
 * Where n = nums.length,
 */

const singleNumber = (nums: number[]) => {
  let set = new Set<number>();
  for (let num of nums) {
    set.has(num) ? set.delete(num) : set.add(num);
  }
  return [...set][0];
};


console.log(singleNumber([4, 2, 1, 2, 1]));
