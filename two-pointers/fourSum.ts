const fourSum = (nums: number[], target: number) => {
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const firstEl = nums[i];

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const secondEl = nums[j];

      let l = j + 1;
      let r = nums.length - 1;

      while (l < r) {
        let sum = firstEl + secondEl + nums[l] + nums[r];
        if (sum === target) {
          res.push([firstEl, secondEl, nums[l], nums[r]]);
          while (nums[l] === nums[l + 1]) l++;
          while (nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// Input: (nums = [1, 0, -1, 0, -2, 2]), (target = 0);
// Output: [
//   [-2, -1, 1, 2],
//   [-2, 0, 0, 2],
//   [-1, 0, 0, 1],
// ];
