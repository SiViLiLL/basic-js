const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let arr = []
   for (let i = 0; i < str.length; i++){
       if(str[i] !== str[i - 1]){
           arr.push([1, str[i]])
       } else {
           arr[arr.length - 1][0] += 1;
       }
   }
   return arr.map(item => {
       if (item[0] === 1) item[0] = ''
       return item.join('')
   }).join('')
}

module.exports = {
  encodeLine
};
