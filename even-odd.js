/* Peter’s school teacher asked him to write a program that would return true if a number is even and false if a number is odd. Help Peter write the program.

**Input:** The first and second input lines contain the numbers.
98
117

**Output:** Print true if the number is an even number and false if the number is an odd number.
true
false */

function checkEvenOrOdd(number){
    console.log(number);
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
//check a even number
const firstNumber = 98;
let evenOrOdd = checkEvenOrOdd(firstNumber);
console.log(evenOrOdd);

// check a odd number
const secondNumber = 117;
evenOrOdd = checkEvenOrOdd(secondNumber);
console.log(evenOrOdd);