// We should use only O(1) extra space here//
/**
 * ✅ Solved on 2025-07-25
 * Leetcode #167
 * Approach: Two-Pointers
 * Time: O(n), Space: O(1) 
 * Where n = array.length
 */
const twoSum2 = (array: number[], target: number) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right]
    if(sum === target) return [left+1,right+1]
    if(sum<target) {
        left++
    }else{
        right--
    }
  }
  return [-1,-1]
};

console.log(twoSum2([1, 2, 3, 4, 5], 3));
