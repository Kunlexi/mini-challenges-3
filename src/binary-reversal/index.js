/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(str) {
    const binaryValue = Number(str).toString(2);
    const paddingLength = binaryValue.length % 8 === 0 ? 0 : 8 - binaryValue.length % 8
    const paddedReversedBinaryValue = [
      ...Array(paddingLength).fill(0), 
      ...binaryValue]
      .reverse()
      .join('');
  
    return parseInt(paddedReversedBinaryValue,2);
}
console.log(binaryReversal());
module.exports = binaryReversal;
