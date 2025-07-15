/**
 * ✅ Solved on 2025-07-12
 * Leetcode #438
 * Approach: Ecludien Algorithm
 * Time: O(n * m), Space: O(1)
 * Where n = s.length, m = p.length
 */

const gcd = (a:number,b:number) => {
    if(a == 0) return b
    return gcd(b,a%b)
}


const findDcdinArr = (arr:number[]) => {

    let res = arr[0]
    for(let i=1;i<arr.length;i++) {
        res = gcd(res,arr[i])
    }
    return res
}

let a = 80
let b = 64
let arr = [20,44,78,90,124,190]

console.log(gcd(a,b))
console.log("GCD arr",findDcdinArr(arr));