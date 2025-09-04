/**
 * ✅ Solved on 2025-09-04
 * Leetcode #2625
 * Approach: Recursion
 * Time: O(n), Space: O(n)
 * Where n = arr.length
 */

type NestedArray<T> = (T | NestedArray<T>)[];

function flatFn<T>(arr: NestedArray<T>, n: number): T[] {
  const result: T[] = [];

  const helper = (array: NestedArray<T>, depth = 0) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth < n) {
        helper(array[i] as NestedArray<T>, depth + 1);
      } else {
        result.push(array[i] as T);
      }
    }
  };

  helper(arr);
  return result;
}

console.log(flatFn([1, 2, 3, [4, 5, 6], [7, 8, [9, 10], 11], 12], 1));
