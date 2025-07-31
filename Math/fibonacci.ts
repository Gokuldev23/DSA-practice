
// Space optimized Fibonacci Method//
/**
 * ✅ Solved on 2025-07-31
 * Approach: Space-Optimized
 * Time: O(n), Space: O(1)
 */

const fib = (n:number):number => {

    let curr = 0

    let prev1 = 0
    let prev2 = 1

    for(let i = 2;i<=n;i++) {
        curr = prev1 + prev2
        prev1 = prev2
        prev2 = curr
    }

    return curr
}

console.log(fib(10))