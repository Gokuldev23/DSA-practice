/**
 * ✅ Solved on 2025-07-12
 * Leetcode #438
 * Approach: Ecludien Algorithm
 * Time: O(n * m), Space: O(1)
 * Where n = s.length, m = p.length
 */


const gcd = (a,b) => {
    if(a == 0) return b
    return gcd(a%b,a)
}

let a = 80
let b = 64
console.log(gcd(a,b))