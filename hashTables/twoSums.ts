/**
 * ✅ Solved on 2025-07-17
 * LeetCode #1
 * Approach: HashMap
 * Time: O(n), Space: O(n)
 * Where n = nums.length
 */

const twoSums = (nums:number[],target:number) => {
     let map = new Map()
    for(let i =0;i<nums.length;i++) {
        const diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(nums[i],i)
    }
}

console.log(twoSums([1,4,3,5,6],7))
