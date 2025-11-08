/**
 * Lovely Burbank has a breathtaking view of Los Angeles skyline. 
 * Let's say you are given an array with heights of consecutive buildings, starting closest to you and extending away.
 * Array [-1,7,3] would represents theree building: first is actually out of view below street level, 
 * behind it is second at 7 stories high, and third is 3 stories high (hidden behind the 7-story).
 * You are situated at street level. Return the array containing the heights of buildings you can see, in order.
 * Given [-1,1,1,7,3] return [1,7]. Given [0,4] return 4. 
 * As always with chllenges, do not use built-in functions such as unshift().
 */

function heights (arr)
{   
    let index = 0;
    let high = 0;

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > high)
        {
            high = arr[i];
            arr[index] = arr[i];
            index++;
        } 
    }

    arr.length = index;
    return arr;
}

console.log(`Test Cases(4/4)\n`);

console.log(`heights([-1,1,1,7] to return [1,7]`);
console.log(`heights([0,4]) to return [4]`);
console.log(`heights([-1,1,1,7,3,5,9]) to return [1,7,9]`);
console.log(`heights([-1,1,1,7,3,5,9,-3,3,15]) to return [1,7,9,15]`);


console.log(`\nOutput`);

console.log(heights([-1,1,1,7]));
console.log(heights([0,4]));
console.log(heights([-1,1,1,7,3,5,9]));
console.log(heights([-1,1,1,7,3,5,9,-3,3,15]));
console.log(heights([-1,1,1,7,3,5,9,-3,3,15]));