/**
 * A funcao fuciona adcionando um numero para retornar um dia da semana
 * 
 * @param {number} day
 * 
 * @returns {string}
 * 
 * @example day = 3 -> tuesday
 */





function days_of_the_week (day){
    switch (day){
        case 1:
            return "sunday";
        case 2:
            return "monday";
        case 3:
            return "tuesday";
        case 4:
            return "wednesday";
        case 5:
            return "thursday";
        case 6:
            return "friday";
        case 7:
            return "saturday";
    }
}
console.log(days_of_the_week(3));
console.log(days_of_the_week(7));
console.log(days_of_the_week(8));