var searchRange = function (nums, target) {
  let start = nums.indexOf(target);
  let end = nums.lastIndexOf(target);
  if (!nums.length) {
    return [-1, -1];
  }

  if (nums.length < 2) {
    return [start, end];
  }

  return [start, end];
};
console.log(searchRange([5, 6, 8, 8, 10], 8));
