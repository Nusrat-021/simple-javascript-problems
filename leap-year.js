/*
Find the given year is leap year or not.
*/

function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return year + ' is Leap year';
    }
    return year +' is not a leap Year';

}

const givenYear = 5000;
const leapYear = isLeapYear(givenYear);
console.log(leapYear);