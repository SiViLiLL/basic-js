const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
	if (str === null){
		str = '' + str
  }
  if (options.addition === null){
		options.addition = '' + options.addition
  }
  if (options.repeatTimes === undefined){
		options.repeatTimes = 1;
  }
  if (options.separator === undefined){
		options.separator = '+';
  }
  if (options.additionRepeatTimes === undefined){
		options.additionRepeatTimes = 1;
  }
  if (options.additionSeparator === undefined){
		options.additionSeparator = '|';
  }
  let resStr = [];
  for (let i = 0; i < options.repeatTimes; i++){
		resStr.push(str)
		for (let j = 0; j < options.additionRepeatTimes; j++){
			 resStr.push(options.addition)
			 if (j !== options.additionRepeatTimes - 1){
				  resStr.push(options.additionSeparator)
			 }
		}
		if (i !== options.repeatTimes - 1) {
			 resStr.push(options.separator)
		}
  }
  return resStr.join('')
}

module.exports = {
  repeater
};
