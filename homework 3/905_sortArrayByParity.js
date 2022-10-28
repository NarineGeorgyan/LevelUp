/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const b = [];
  const c = [];
  for (let i = 0; i < nums.length; ++i) {
    nums[i] % 2 === 0 ? b.push(nums[i]) : c.push(nums[i]);
  }
  return [...b, ...c];
};
sortArrayByParity([3, 1, 2, 4]);
  