const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)){
		throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let resultArr = [];
  for (let i = 0; i < arr.length; i++){
		if (typeof arr[i] === 'string'){
			 if (arr[i] === '--double-next'){
				  if (arr[i + 1] !== undefined){
						resultArr.push(arr[i + 1])
				  }
				  continue
			 }
			 if (arr[i] === '--double-prev'){
				  if (arr[i - 2] === '--discard-next'){
						continue
				  } else if (arr[i - 1] !== undefined){
						resultArr.push(arr[i - 1])
				  }
				  continue
			 }
			 if (arr[i] === '--discard-prev'){
				  if (arr[i - 2] === '--discard-next'){
						continue
				  } else if (arr[i - 1] !== undefined){
						resultArr.pop()
				  }
				  continue
			 }
			 if (arr[i] === '--discard-next'){
				  i++
				  continue
			 }
		}
		resultArr.push(arr[i])
  }
  return resultArr
}

module.exports = {
  transform
};
