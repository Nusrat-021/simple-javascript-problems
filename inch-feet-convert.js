/* The standard height of a volleyball player is 7 feet. Jim wants to join the volleyball team, so he decided to measure his height to see if he meets the standard. Calculate his height in feet.
**Input:**

The input line has the height in inch

84

**Output:**

Print the height in feet.

7 */

/* NORMAL: ARITHMETIC OPERATORS*/
const jimHeightInInch = 84;
const jimHeightInFeet = jimHeightInInch / 12;
console.log(jimHeightInFeet);


/*Using FUNCTION*/

function inchToFeetConvert(inches){
    const feet = inches / 12;
    return feet;
}

const jimHeightInch = 84;
const jimHeightFeet = inchToFeetConvert(jimHeightInInch);
console.log(jimHeightFeet);