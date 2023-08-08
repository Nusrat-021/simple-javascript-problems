/* Write a function findOddSum() that will take the array[5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers. */

function findOddSum(array){
    let sum = 0;
    for(let i =0 ; i < array.length ; i++){
        if(array[i] % 2 !== 0){
            sum += array[i];
        }
    }
    return sum;
}

const array =[5,7,8,10,45,30];
const oddSum = findOddSum(array);
console.log(oddSum);