const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
   getLength() {
      return chain.length
   },
   addLink(value) {
      if (value === undefined){
         this.chain.push(`( )`);
         return this
      } else {
         this.chain.push(`( ${value} )`);
         return this
      }
   },
   removeLink(position) {
      if (this.chain[position - 1] === undefined){
			this.chain = [];
         throw new Error ('You can\'t remove incorrect link!')
      }
      this.chain.splice(position - 1,1);
      return this
   },
   reverseChain() {
      let chainRev = [];
      for (let i = this.chain.length - 1; i > -1; i--) {
         chainRev.push(this.chain[i]);
      }
      this.chain = chainRev;
      return this
   },
   finishChain() {
      let chainRes = this.chain.join('~~');
      this.chain = [];
      return chainRes
   }
};

module.exports = {
  chainMaker
};
