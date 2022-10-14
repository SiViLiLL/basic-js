const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
   constructor(value = true) { 
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
		this.value = value;
  }
  encrypt(str, key) {
	if(str === undefined || key === undefined){
		throw new Error('Incorrect arguments!')
   }
	 let subStrs = str.toLowerCase().replace(/\s/g,'').split('').reduce((prev,item,index) => {
		  if (prev[Math.floor(index/key.length)] === undefined){
				prev[Math.floor(index/key.length)] = '';
		  }
		  prev[Math.floor(index/key.length)] += item;
		  return prev
	 }, []).map(item => item.split(''))
	 
	 let encodedStr = [];
	 for (let i = 0; i < subStrs.length; i++){
		  let encodedSubStr = subStrs[i].map((item,index) => {
				if (this.alphabet.indexOf(item) !== -1){
					 let indexCode = this.alphabet.indexOf(item) + this.alphabet.indexOf(key.toLowerCase()[index]);
					 if (indexCode >= this.alphabet.length){
					 item = this.alphabet[indexCode - this.alphabet.length]
					 } else {
					 item = this.alphabet[indexCode];
				}
				return item
				} else {return item}
		  })
		  encodedStr.push(encodedSubStr)
	 }
	 let whiteSpaces = str.split('').reduce((prev,item,index) => {
		  if (item === ' '){
				prev.push(index)
		  }
		  return prev
	 },[]).map((item,index) => item -= index)
	 encodedStr = encodedStr.map(item => item.join('')).join('').split('')
	 let encodedStrRes = encodedStr.map((item,index) => {
		  for (let i = 0; i < whiteSpaces.length;i++){
				if (index === whiteSpaces[i] - 1){
					 item += ' '
				}
		  }
		  return item
	 }).join('').toUpperCase()
	 if (this.value !== false){
		  return encodedStrRes
	 } else {
		  return encodedStrRes.split('').reverse ().join('')}
}
decrypt(str, key) {
	if(str === undefined || key === undefined){
		throw new Error('Incorrect arguments!')
   }
	 let subStrs = str.toLowerCase().replace(/\s/g,'').split('').reduce((prev,item,index) => {
		  if (prev[Math.floor(index/key.length)] === undefined){
				prev[Math.floor(index/key.length)] = '';
		  }
		  prev[Math.floor(index/key.length)] += item;
		  return prev
	 }, []).map(item => item.split(''))
	 
	 let decodedStr = [];
	 for (let i = 0; i < subStrs.length; i++){
		  let decodedSubStr = subStrs[i].map((item,index) => {
				if (this.alphabet.indexOf(item) !== -1){
					 let indexCode = this.alphabet.indexOf(item) - this.alphabet.indexOf(key.toLowerCase()[index]);
					 if (indexCode < 0){
					 item = this.alphabet[indexCode + this.alphabet.length]
					 } else {
					 item = this.alphabet[indexCode];
				}
				return item
				} else {return item}
		  })
		  decodedStr.push(decodedSubStr)
	 }
	 let whiteSpaces = str.split('').reduce((prev,item,index) => {
		  if (item === ' '){
				prev.push(index)
		  }
		  return prev
	 },[]).map((item,index) => item -= index)
	 decodedStr = decodedStr.map(item => item.join('')).join('').split('')
	 let decodedStrRes = decodedStr.map((item,index) => {
		  for (let i = 0; i < whiteSpaces.length;i++){
				if (index === whiteSpaces[i] - 1){
					 item += ' '
				}
		  }
		  return item
	 }).join('').toUpperCase()
	 if (this.value !== false){
		  return decodedStrRes
	 } else {
		  return decodedStrRes.split('').reverse ().join('')}
}
}

module.exports = {
  VigenereCipheringMachine
};
