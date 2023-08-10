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
const leap = isLeapYear(givenYear);
// console.log(leap);


/* Sarah wants to know if the next year is a leap year. Help Sarah write a program that will return true if it is a leap year and false if it is not.

**Input:**
2023

**Output:**
false */

function leapYear(year){
    if((year % 4 === 0 && year%100 !== 0) || year%400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const year = 2023;
const result = leapYear(year);
console.log(result);