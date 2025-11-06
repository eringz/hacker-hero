/**
 * Replicate JavaScript's concat(). Create a standalone function that accepts two arrays.
 * Return a new array containing the first array's elements, followed by the second array's elements.
 * Do not alter the original arrays.
 * Ex: arrConcat(['a', 'b'], [1, 2]) should return a new array ['a', 'b', 1, 2];
 */

function arrayConcat (arr1, arr2)
{
    let arr = [];
    let length = arr1.length + arr2.length;

    for (let i = 0; i < length; i++)
    {
        (i < arr1.length) ? (arr[i] = arr1[i]) : (arr[i] = arr2[i - arr1.length]);
    }


    return arr;
}

console.log(`Test Cases(4/4)\n`);
console.log(`arrayConcat([1,2], [3,4]) to return [1,2,3,4]`);
console.log(`arrayConcat([1,2], [3,4,5]) to return [1,2,3,4,5]`);
console.log(`arrayConcat([1,2,3], [3,4,5,6]) to return [1,2,3,3,4,5,6]`);
console.log(`arrayConcat([-1], [-5,3]) to return [-1,-5,3]`);


console.log(`\nOutput`);

console.log(arrayConcat([1,2], [3,4]));
console.log(arrayConcat([1,2], [3, 4, 5]));
console.log(arrayConcat([1, 2, 3], [3, 4, 5, 6]));
console.log(arrayConcat([-1], [-5, 3]));