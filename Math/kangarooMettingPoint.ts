/**
 * ✅ Solved on 2025-08-08
 * Approach: Math
 * Time: O(1), Space: O(1)
 */

const willKangaroosMeet = (x1: number, v1: number, x2: number, v2: number) => {
  if (v1 === v2) {
    return x1 === x2 ? "YES" : "NO";
  }
  let point = (x2 - x1) / (v1 - v2);

  return point > 0 && Number.isInteger(point) ? "YES" : "NO";
};

console.log(willKangaroosMeet(0, 3, 4, 2));
