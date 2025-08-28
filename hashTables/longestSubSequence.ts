/**
 * ✅ Solved on 2025-08-28
 * LeetCode #128
 * Approach: HashMap
 * Time: O(n), Space: O(n)
 */

const longestSqnce = (nums: number[]): number => {
  const set = new Set(nums);
  const newNum = [...set];

  let maxLen = 0;
  for (let i = 0; i < newNum.length; i++) {
    let curr = newNum[i];
    if (!set.has(curr)) continue;
    let temp = curr;
    let count = 0;
    while (set.has(temp)) {
      set.delete(temp);
      temp -= 1;
      count++;
    }
    temp = curr + 1;
    while (set.has(temp)) {
      set.delete(temp);
      temp += 1;
      count++;
    }
    maxLen = Math.max(count, maxLen);
  }

  return maxLen;
};

console.log(longestSqnce([1, -3, 2, 4, 5, 2, 2, 4, 2, 3, 6]));
console.log(longestSqnce([1, 100, 2, 200]));
