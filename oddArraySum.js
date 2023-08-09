/* Write a function findOddSum() that will take the array[5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers. */

function findOddSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
}

const array = [5, 7, 8, 10, 45, 30];
const oddSum = findOddSum(array);
console.log(oddSum);

/**
 * ---------------------
 * WITH REQUIREMENTS
 * ---------------------
 * 1. find the odd numbers or even numbers from an array
 * 2. send the new array of odd numbers to the sum of an array
 *
 */
// sum of the odd numbers
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// finding the odd numbers
function findOddNumbers(array) {
  const oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumbers.push(array[i]);
    }
  }
  return oddNumbers;
}
const oddNumbers = findOddNumbers(array);
const sumOddNumbers = sum(oddNumbers);
console.log(sumOddNumbers);
