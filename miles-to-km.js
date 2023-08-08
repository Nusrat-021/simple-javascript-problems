/* John is a web developer, and he cycles to work. He knows the distance between his house and his office in miles. John wants to measure the distance in kilometers. Calculate the distance in km.

km = inches * 1.60934;

**Input:**
The input line has the distance in miles.
2

**Output:**
Print the distance in km.
3.21868 */

// BASIC ARITHMETIC OPERATION
const distanceInMiles = 2;
const distanceInKilometer = distanceInMiles * 1.60934;
console.log(distanceInKilometer);


// using function
function milesToKilo(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const johnDistanceInMiles = 2;
const johnDistanceInKilometer = milesToKilo(johnDistanceInMiles);
console.log(johnDistanceInKilometer);