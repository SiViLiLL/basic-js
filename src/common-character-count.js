const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const commLetters = s1.split('')
    .reduce((acc, letter) => {
      if (s2.indexOf(letter) !== -1) {
        acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
      }
      return acc
    }, {});
  return s2.split('').reduce((acc, letter) => {
      if (commLetters[letter]) {
          commLetters[letter] -= 1;
          return acc + 1;
      }
      return acc;
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
