/**
 * ✅ Solved on 2025-07-17
 * LeetCode #1
 * Approach: HashMap
 * Time: O(n), Space: O(n)
 * Where n = nums.length
 */

const twoSums = (nums:number[],target:number) => {
     const map = new Map<number,number>()
     for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(map.has(element)){
            return [map.get(element),i]
        }
        map.set(target-element,i)
     }
     return [-1,-1]
}

console.log(twoSums([1,4,3,5,6],7))
console.log(twoSums([2,7,11,15],9))
console.log(twoSums([1,5,3,2,7,1],7))
