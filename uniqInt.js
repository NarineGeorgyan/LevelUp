// const uniqueIntOfStr = (str) => {
//   const hash = {};
//   for (let char of str) {
//     if (hash[char]) {
//       return "the char of string is not unique";
//     }
//     hash[char] = char;
//   }
//   return "the char of string is unique";
// };

// console.log(uniqueIntOfStr("hello"));

//solution with binary

const uniqueIntOfStr = (str) => {
  let first_alph_i = 97;
  let mask = 0;
  let pos = 0;
  let table = 0;
  for (let i = 0; i < str.length; i++) {
    pos = str[i].charCodeAt() - first_alph_i;
    mask = 1 << pos;
    if (table & mask) {
      return true;
    }
    table |= 1 << pos;
  }
  return false;
};

console.log(uniqueIntOfStr("anna"));
