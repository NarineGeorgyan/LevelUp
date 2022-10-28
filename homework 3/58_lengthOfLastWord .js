var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

var lengthOfLastWord = function (s) {
  let str = s.trim();
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      length = 0;
    } else {
      length++;
    }
  }
  return length;
};
