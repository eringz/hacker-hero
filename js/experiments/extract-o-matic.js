/**
 * Challenge
 *  Create the extractDigit(num, digitNum) function that given a number and a digit number, returns the numeral value of that digit, etc.
 * Given (1824, 2), return 4. given (1824, 7), return 0.
 * 
 * Second handle negative digitNum values, where  -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc.
 * Given (1234.56, -1) return to 5. 
 */


function extractDigit(num, digitNum)
{
    let numString = num.toString();
    if (digitNum < 0) 
    {
        return numString[numString.indexOf(".")];
}

console.log(extractDigit(1824, 2));
console.log(extractDigit(1821, 0));
console.log(extractDigit(1234.56, -1));
console.log(extractDigit(199.35, 0));
console.log(extractDigit(199.35, -1));
console.log(extractDigit(199.35, -2));