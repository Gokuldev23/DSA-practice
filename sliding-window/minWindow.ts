/**
 * ✅ Solved on 2025-07-23
 * Leetcode #76
 * Approach: Hash Map
 * Time: O(n + m), Space: O(1)
 * Where n = s.length , m = t.length
 */

function minWindowSubstring(s: string, t: string): string {
  let tFreq = new Map<string, number>();

  let sFreq = new Map<string, number>();

  for (const char of t) {
    tFreq.set(char, (tFreq.get(char) || 0) + 1);
  }

  let l = 0,
    r = 0;
  let have = 0;
  let need = tFreq.size;
  let res = [-1, -1];
  let minLen = Infinity;

  while (r <= s.length) {
    let char = s[r];
    sFreq.set(char, (sFreq.get(char) || 0) + 1);

    if (tFreq.has(char) && sFreq.get(char) === tFreq.get(char)) {
      have++;
    }

    while (have === need) {
      if (r - l < minLen) {
        minLen = r - l;
        res = [l, r];
      }

      let char = s[l];
      sFreq.set(char, (sFreq.get(char) || 0) - 1);
      if (tFreq.get(char) && sFreq.get(char)! < tFreq.get(char)!) {
        have--;
      }
      l++;
    }
    r++;
  }

  const [start, end] = res;
  return minLen === Infinity ? "" : s.slice(start, end + 1);
}

let s = "ADOBECODEBANC";
let k = "ABC";
console.log(minWindowSubstring(s, k));
