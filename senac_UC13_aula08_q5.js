/**
 * este Arrow calcula o preço original com o preço com desconto ao aplicar os valores
 * 
 * 
 * @param {number} originalprice 
 * 
 * @param {number} discountedprice 
 * 
 * @returns {string}
 */





const calculate_discount = (originalprice, discountedprice ) => originalprice - (originalprice * discountedprice /100);

console.log(calculate_discount(100, 10));
console.log(calculate_discount(250,20));