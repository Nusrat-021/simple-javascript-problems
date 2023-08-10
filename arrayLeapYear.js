/* Write a function findLeapYear() that will take the array[2023,2024,2025,2028,2030] is the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result. */

function findLeapYear(arr){
    const leapYear = [];
    for(let i =0;i<arr.length;i++){
        if((arr[i]%4===0 && arr[i]%100 !== 0)|| arr[i]%400 ===0){
            leapYear.push(arr[i]);
        }
    }
    return leapYear;

}

const arrayYear = [2023,2024,2025,2028,2030];
const leapYearArray = findLeapYear(arrayYear);
console.log(leapYearArray);