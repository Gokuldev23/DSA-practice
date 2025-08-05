/**
 * ✅ Solved on 2025-07-30
 * Leetcode #1071
 * Approach: string manipulation
 * Time: O(logn), Space: O(1)
 * Where n = s.length
 */

const gcdOfString = (str1: string, str2: string): string => {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a: number, b: number) => (b === 0 ? a : gcd(b, a % b));

  const win = gcd(str1.length, str2.length);

  const gcdStr = str1.substring(0, win);

  return gcdStr;
};

console.log(gcdOfString("ABCABC", "ABC"));
