module.exports = function reverse (n) {
 const str = n.toString();
 const reverted = [];
 for (let i = str.length-1; i >=0; i--) {
   reverted.push(str[i]);
 }
 return parseInt(reverted.join('')); 
}
