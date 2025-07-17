/**
 * ✅ Solved on 2025-07-19
 * LeetCode #347
 * Approach: HashMap
 * Time: O(n), Space: O(n)
 * Where (n = nums.length)
 */


function topKFrequent(nums: number[], k: number): number[] {

    const hashMap = new Map<number, number>()

    const arr: number[][] = Array.from({length:nums.length + 1},()=>[])

    for(const n of nums){
        hashMap.set(n,( hashMap.get(n) || 0 ) + 1)
    }

    hashMap.forEach((value: number, key: number)=> {
        arr[value].push(key)
    })

    let res: number[] = []

    for(let i=arr.length-1;i>0;i--){
        for(const n of arr[i]){
            res.push(n)
            if(res.length == k) return res
        }
    }

    console.log({arr})
    return res
}
console.log(topKFrequent( [1,2,2,3,3,3],2))