// factorial

function factorial(number){
    let fac = 1;
    for(i=number;i>=1;i--){
        fac = fac*i;
    }
    return fac;

}
const number = 5;
const result = factorial(number);
console.log(result);

