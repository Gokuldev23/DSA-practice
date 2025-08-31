/**
 * ✅ Solved on 2025-08-31
 * Leetcode #3
 * Approach: Sliding window + Two pointers
 * Time: O(n), Space: O(1)
 * Where n = s.length
 */

const lengthOfLongestSubstring = (s: string) => {
  let max = 0;
  let l = 0;
  let r = 0;
  const set = new Set<string>();
  while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    max = Math.max(max, r - l + 1);
    set.add(s[r]);
    r++;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
