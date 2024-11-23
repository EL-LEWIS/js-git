/**
 * esta funçao fuciona aplicando um numero aleatorio e calcula para a aleatoriedade entre inpar ou par
 * 
 * 
 * @param {number} number 
 * @returns {string}
 * 
 * @example number = 10 -> inpar
 */




function even_or_uneven (number){
    return number %2 === 0 ? "even" : "uneven";
}
console.log(even_or_uneven(10));
console.log(even_or_uneven(15));
console.log(even_or_uneven(22));