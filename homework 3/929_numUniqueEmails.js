var localName = function (email) {
  let localName = email.split("@");
  let shnik = email.indexOf("@");
  let plus = email.indexOf("+");
  let newstr = "";
  for (let i = 0; i < localName[0].length; ++i) {
    if ((i < shnik && i >= plus && plus > 0) || localName[0][i] == ".") {
      continue;
    }
    newstr += email[i];
  }
  return newstr + "@" + localName[1];
};

var numUniqueEmails = function (emails) {
  const mutateEmail = emails.map((val) => {
    return localName(val);
  });
  return mutateEmail.filter((val, i) => mutateEmail.indexOf(val) == i).length;
};
console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
