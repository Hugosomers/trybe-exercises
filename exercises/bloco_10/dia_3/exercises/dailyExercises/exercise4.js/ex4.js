const returnUppercase = (str) => {
  return str.toUpperCase();
};

const returnFirstLetter = (str) => {
  return str.charAt(0);
};

const concatStrings = (str1, str2) => {
  return str1.concat(str2);
}

module.exports = {
  returnUppercase,
  returnFirstLetter,
  concatStrings
}