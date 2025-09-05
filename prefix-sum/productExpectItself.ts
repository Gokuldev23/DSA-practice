/**
 * ✅ Solved on 2025-09-05
 * Leetcode #238
 * Approach: Prefix Sum
 * Time: O(n), Space: O(1) execpt resukting array
 * Where n = array.length
 */

const product = (array: number[]): number[] => {
  const res: number[] = [];
  let prefix = 1;
  let suffix = 1;
  for (let i = 0; i < array.length; i++) {
    res.push(prefix);
    const element = array[i];
    prefix *= element;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    const element = array[i];
    suffix *= element;
  }

  return res;
};

console.log(product([1, 2, 3, 4]));
console.log(product([1, 2, 0, 4, 5]));
