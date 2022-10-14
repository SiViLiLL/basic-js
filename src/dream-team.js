const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   if(!Array.isArray(members) || members.length === 0) return false
   let membersFirstLetterName = members.reduce((prev,item) => {
       if (typeof item === 'string'){
           prev.push(item.trim().slice(0,1).toUpperCase())
       }
       return prev
   }, [])
   membersFirstLetterName.sort()
   return membersFirstLetterName.length === 0? false: membersFirstLetterName.join('')
}

module.exports = {
  createDreamTeam
};
