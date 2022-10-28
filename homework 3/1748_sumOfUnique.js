var sumOfUnique = function (nums) {
  const obj = Object.create(null);
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
  }

  return Object.keys(obj).reduce(
    (aggr, val) => (obj[val] === 1 ? +aggr + +val : aggr),
    0
  );
};
var sumOfUnique = function (nums) {
  const obj = Object.create(null);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
  }
  for (let [key, val] of Object.entries(obj)) {
    if (obj[key] == 1) {
      sum += Number(val);
    }
  }
  return sum;
};
