var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;
  const arr = [];
  if (start == end && nums[mid] == target) {
    return [mid, end];
  }
  while (start <= end) {
    mid = Math.round((start + end) / 2);

    if (nums[mid] === target) {
      return nums[mid] === nums[mid + 1] ? [mid, mid + 1] : [mid - 1, end];
    }

    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      console.log(start);
      start = mid + 1;
    }
  }
  return [-1, -1];
};
console.log(searchRange([1, 3], 1));
