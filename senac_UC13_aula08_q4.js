/**
 * esta funçao verifica se um usuário tem acesso baseado em sua idade, status de administrador e bloqueio.
 *
 * @param {Object} user 
 * 
 * @param {number} user.year 
 * 
 * @param {boolean} user.isAdmin 
 *
 *  @param {boolean} user.isBlocked 
 *
 *  @returns {string} true
 * 
 * @example user.isblocked = false; user.isAdmin = true
 */


function accesses (user){
    return (user >18 && user ||user.isAdmin )&& !user.isBlocked; 
}
console.log(accesses({ year: 20, isAdmin: false, isBlocked: false })); // true
console.log(accesses({ year: 16, isAdmin: true, isBlocked: true })); // false 

