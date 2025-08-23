/**
 * ✅ Solved on 2025-08-23
 * Leetcode #6
 * Approach: Array traversel
 * Time: O(n), Space: O(1)
 * Where n = str.length
 */

const zigZag = (str: string, numRows: number): string => {
  const zigArr: string[][] = Array.from({ length: numRows }, () => []);
  let down = true;
  let ind = 0;
  for (let i = 0; i < str.length; i++) {
    zigArr[ind].push(str[i]);
    if (ind === numRows - 1) down = false;
    else if (ind === 0) down = true;
    ind += down ? 1 : -1;
  }
  return zigArr.flat().join("");
};

console.log(zigZag("PAYPALISHIRING", 3));
