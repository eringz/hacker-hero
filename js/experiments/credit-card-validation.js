/**
 * The Luhn formula is sometimes used to validate credit card numbers. 
 * Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card(13-19 depending on the card).
 * and return a boolean wheter the card digits satisfy the Luhn formula.
 * 
 * 1. Set aside the last digit; do not include it in these calculations (until step 5).
 * 2. Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2.
 * 3. If any results are larger than 9, subtract 9 from them;
 * 4. Add all numbers (not just our odds) together;
 * 5. Now add the last digit back in - the sum should be a multiple of 10.
 * 
 * For example, when given a digit array [5,2,2,8,2], after step 1, it becomes [5,2,2,8] and then after step 2, it is [5,4,2,16]. 
 * Post step 3, we have [5,4,2,7], then folowing 4, it becomes 18.
 * After step 5, our value is 20, so ultimately we return true.
 * If the final digit were non-multiple of 10, we would instead return false.
 */
function isCreditCardValid(digitArr)
{
    let lastDigit = digitArr[digitArr.length-1];
    digitArr.length--;
    let sum = 0;

    for (let i = 0; i < digitArr.length; i++){
        if (i % 2 !== 0)
        {
            digitArr[i] *= 2;
        }

        if (digitArr[i] > 9) 
        {
            digitArr[i] -= 9;
        }
        sum += digitArr[i];
    }

    sum += lastDigit;
    return (sum % 10 === 0) ? true : false;

}


console.log(`Test Cases(4/4)\n`);

console.log(`isCreditCardValid([5,2,2,8,2]) to return true`);
console.log(`isCreditCardValid([5,2,3,8,2]) to return false`);
console.log(`isCreditCardValid([4,2,2,2,2,2,2,2,2,2,2,2,2]) to return true`);
console.log(`isCreditCardValid([4,0,1,2,8,8,8,2,5,6,8,8,1,8,9,1] ) to return false`);

console.log(`\nOutput`);

console.log(isCreditCardValid( [5, 2, 2, 8, 2] ));
console.log(isCreditCardValid( [5, 2, 3, 8, 2] ));
console.log(isCreditCardValid( [4,2,2,2,2,2,2,2,2,2,2,2,2] ));
console.log(isCreditCardValid( [4,0,1,2,8,8,8,2,5,6,8,8,1,8,9,1] ));