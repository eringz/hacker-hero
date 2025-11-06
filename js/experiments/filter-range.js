/**
 * Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range.
 * Given arr and values min and max, retain only the array values between min and max.
 * Work in-place: return the array you are given, with values in the original order.
 * No built-in array functions.
 */

function filterRange (arr, min, max)
{
    let index = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > min && arr[i] < max)
        {
            arr[index] = arr[i];
            index++;
        }
    }

    arr.length = index;
    return arr;

}

console.log(`filterRange([1,3,5,7,10], 4, 8) to return [5,7] : [${filterRange([1,3,5,7,10], 4, 8)}]`);
console.log(`filterRange([1,3,5,7,10], -1, 4) to return [1,3] : [${filterRange([1,3,5,7,10], -1, 4)}]`);
console.log(`filterRange([2,4,3,5], 2, 6) to return [4,3,5] : [${filterRange([2, 3, 4, 5], 2, 6)}]`);
console.log(`filterRange([2,4,3,5], 0, 4) to return [2,3] : [${filterRange([2, 3, 4, 5], 0, 4)}]`);
console.log(`filterRange([6,2,-3,5,7], 3, 8) to return [6,5,7] : [${filterRange([6,2,-3,5,7], 3, 8)}]`);
