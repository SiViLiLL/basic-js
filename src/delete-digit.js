const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let nArr = Array.from('' + n);
    let arrNums = nArr.reduce((prev,item,index,arr) => {
        let arrDuplicate = [];
        for (let i = 0; i < arr.length; i++){
            if (i === index){
                continue
            }
            arrDuplicate.push(arr[i])
        }
        prev.push(arrDuplicate)
        return prev
    },[]).map(item => +item.join(''))
    return Math.max(...arrNums)
}

module.exports = {
  deleteDigit
};
