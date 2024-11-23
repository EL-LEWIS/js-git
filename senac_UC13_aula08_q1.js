/**
 * Esta funçao fuciona para verificar a idade se é de maior de idade ou menor de idade
 * 
 * @param {number} year
 *
 * 
 *  @returns {string} 
 *
 */

function verifyage (year){
    return year <=18 ? "under age" : "of legal age";
}
console.log(verifyage(15));
console.log(verifyage(18));
console.log(verifyage(21));
