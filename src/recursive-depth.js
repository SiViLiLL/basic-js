const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
	let depth = 1;
	for (let i = 0; i < arr.length; i++){
		let depthItem = 1;
		if (Array.isArray(arr[i])){
			depthItem += this.calculateDepth(arr[i]);
		}
		depth = (depthItem > depth)? depthItem : depth;
	}
	return depth
  }
}

module.exports = {
  DepthCalculator
};
