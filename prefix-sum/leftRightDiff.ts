/**
 * ✅ Solved on 2025-07-14
 * Leetcode #2574
 * Approach: Prefix Sum
 * Time: O(n), Space: O(1)
 * Where n = nums.length
 */

function leftRightDifference(nums: number[]): number[] {

    let sum = nums.reduce((prev,curr)=>prev+=curr,0)
    
    let res:number[] = []
    let leftSum = 0
    let rightSum = 0
    for (let index = 0; index < nums.length; index++) {
        rightSum = sum - leftSum - nums[index] 
        res.push(Math.abs(rightSum - leftSum))
        leftSum+=nums[index]
    }

    
    return res
};

let num = [10,4,8,3]

// Output: [15,1,11,22]
console.log(leftRightDifference(num))