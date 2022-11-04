function foo(nums) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let result = nums.length;
  let degree = Math.max(...Object.values(obj));
  let key = Object.keys(obj);

  for (let i = 0; i < key.length; ++i) {
    if (Object.values(obj)[i] == degree) {
      arr.push(key[i]);
    }
  }
  for (let i = 0; i < arr.length; ++i) {
    let start = nums.indexOf(+arr[i]);
    let end = nums.lastIndexOf(+arr[i]);

    result = Math.min(result, end - start + 1);
  }

  return result;
}
foo([1, 1, 2, 2, 2, 1]);
