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
	let count = 0;
	let obj1 = {};
	let obj2 = {};
	for (let i = 0; i < s1.length; i++){
		 if (obj1[s1[i]] === undefined){
			  obj1[s1[i]] = 1;
		 } else obj1[s1[i]] += 1
	}
	for (let i = 0; i < s2.length; i++){
		 if (obj2[s2[i]] === undefined){
			  obj2[s2[i]] = 1;
		 } else obj2[s2[i]] += 1
	}
	if (s1.length >= s2.length){
		 for (let property in obj2){
			  if (obj1[property] !== undefined){
					obj1[property] < obj2[property]? count += obj1[property]: count += obj2[property]
			  }
		 }
	} else {
		 for (let property in obj1){
			  if (obj2[property] !== undefined){
					obj1[property] < obj2[property]? count += obj1[property]: count += obj2[property]
			  }
		 }
	}
	return count
}

module.exports = {
  getCommonCharacterCount
};
