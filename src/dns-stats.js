const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	return domains.reduce((prev,item) => {
		let itemArr = item.split('.');
		let itemArrHelp = [];
		for (let i = itemArr.length - 1; i >= 0; i--){
			 itemArrHelp.push('.' + itemArr[i])
			 let propertyName = itemArrHelp.join('');
			 if (prev[propertyName] === undefined){
				  prev[propertyName] = 1;
			 } else {
				  prev[propertyName] += 1;
			 }
		}
		return prev
  }, {})
}

module.exports = {
  getDNSStats
};
