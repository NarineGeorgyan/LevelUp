var intersection = function (nums1, nums2) {
    let set = new Set(...[nums1])
    let number = new Set();
    for (let item of nums2) {
      if (set.has(item)) {
        number.add(item);
      }
    }
    return [...number];
  };
  intersection([1,2,2,1], [2,2])