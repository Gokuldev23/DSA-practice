/**
 * ✅ Solved on 2025-08-22
 * LeetCode #12
 * Approach: HashMap
 * Time: O(1), Space: O(1)
 */

const intMap: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function intToRoman(num: number): string {
  const numMap = new Map<number, string>(intMap);
  let res = "";
  let ind = 0;
  while (num > 1) {
    let value = intMap[ind][0];
    while (num - value >= 0) {
      num -= value;
      res += numMap.get(value);
    }
    ind++;
  }
  return res;
}

console.log(intToRoman(59));
