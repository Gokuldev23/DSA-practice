/**
 * ✅ Solved on 2025-07-29
 * Leetcode #8
 * Approach: string manipulation
 * Time: O(n), Space: O(nn)
 * Where n = s.length
 */

const atoi = (s: string) => {
  s = s.trim();
  if (s.length === 0) return "";

  let sign = 1;
  let i = 0;
  if (s[0] === "+") {
    i++;
  } else if (s[0] === "-") {
    i++;
    sign *= -1;
  }

  let res = 0;

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    res = res * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0));
    i++;
  }
  res = res * sign;

  const MAX_INTEGER = 2 ** 31 - 1;
  const MIN_INTEGER = -(2 ** 31);

  if (res > MAX_INTEGER) {
    return MAX_INTEGER;
  } else if (res < MIN_INTEGER) {
    return MIN_INTEGER;
  }
  return res;
};

console.log(atoi("42"));
console.log(atoi(" -042"));
