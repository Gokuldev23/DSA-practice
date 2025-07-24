/**
 * ✅ Solved on 2025-07-24
 * Leetcode #392
 * Approach: Two-Pointers
 * Time: O(n), Space: O(1)
 * Where n = s.length, m = t.length
 */

const isSubSequence = (s: string, t: string) => {
  let sLen = s.length;
  let ind = 0;

  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (s[ind] === element) {
      ind++;
    }
  }
  return sLen === ind;
};

console.log(isSubSequence("abbc", "ahbcfbgdc"));
