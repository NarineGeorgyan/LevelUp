var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;
  const arr = [];
  if (start == end && nums[mid] == target) {
    return [mid, end];
  }
  if (nums.length === 2) {
    return nums[start] === target && nums[end] === target
      ? [start, end]
      : target === nums[start]
      ? [start, start]
      : target === nums[end]
      ? [end, end]
      : [-1, -1];
  }

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      if (nums[mid] === nums[0]) return [start, mid];
      if (nums[mid] === nums[nums.length - 1]) return [mid, end];

      if (nums[mid] !== nums[mid + 1]) {
        if (nums[mid] === nums[mid - 1]) {
          return [mid - 1, mid];
        } else if (nums[mid] !== nums[mid - 1]) {
          return [mid, mid];
        }
        return [mid, mid + 1];
      }
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [-1, -1];
};
console.log(searchRange([5, 6, 8, 8, 10], 10));
