//✅ Solved on 2025-08-21 
//✅ Problem: LeetCode #2623 – Memoize
//  ✅ Approach: Hashing (Cache with Map / Object)
//  ✅ Time Complexity: O(1) average (lookup & insert)
//  ✅ Space Complexity: O(n) (storing results for unique inputs)

type Fn = (...params: number[]) => number;

const memoize = (fn: Fn): Fn => {
  let memo = {};
  return function (...args) {
    let key = String(args);
    if (key in memo) return memo[key];
    memo[key] = fn(...args);
    return memo[key];
  };
}

 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
   return a + b;
 })
 memoizedFn(2, 3) // 5
 memoizedFn(2, 3) // 5


