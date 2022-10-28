var isPalindrome = function (s) {
  let str = "";
  s = s.replaceAll(/[\W/_]/g, "").toLowerCase();
  for (let i = 0; i <= s.length; i++) {
    str += s.charAt(s.length - i);
  }

  return str == s;
};
