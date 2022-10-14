const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	let sumDigits = Array.from('' + n).reduce((prev, item) => {
		return prev + +item
  }, 0)
  if (sumDigits >= 10){
		sumDigits = getSumOfDigits(sumDigits);
  }
  return sumDigits
}

module.exports = {
  getSumOfDigits
};
