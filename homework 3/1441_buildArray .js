var buildArray = function (target, n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (target.includes(i)) {
      arr.push("Push");
    } else {
      arr.push("Push");
      arr.push("Pop");
    }
    if (target[target.length - 1] === i) {
      break;
    }
  }

  return arr;
};
