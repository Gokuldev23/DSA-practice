/**
 * ✅ Solved on 2025-07-14
 * Leetcode #724
 * Approach: Prefix Sum
 * Time: O(n), Space: O(1)
 * Where n = nums.length
 */


const pivotIndex = (nums: number[]) => {

    let totalSum = nums.reduce((prev,curr)=>prev+=curr,0)
    
    let leftSum = 0
    for(let i=0;i<nums.length;i++) {
        let rightSum = totalSum - leftSum - nums[i]
        if(leftSum === rightSum) {
            return i
        }
        leftSum+= nums[i]
    }
    return -1
}

let nums = [1, 7, 3, 6, 5, 6]

console.log(pivotIndex(nums))