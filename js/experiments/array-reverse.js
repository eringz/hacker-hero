/**
 * Given a numerical array, reverse the order of values, in-place.
 * The reversal array should have the same length, with existing elements move to other indeces so that the other order of elements is reversed.
 * Working 'in-place' means that you cannot use a second array - move values within the array that you are given.
 * Before proceeding with the challenge, please watch the following video. https://www.hackerhero.com/basic-algorithm/array:-reverse
 */


function reverse (arr)
{
    for (let i = 0; i < arr.length/2; i++)
    {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(`reverse([1, 3, 5]) to return [5, 3, 1] : [${reverse([1, 3, 5])}]`);
console.log(`reverse([-1, 3, -5]) to return [-5, 3, -1] : [${reverse([-1, 3, -5])}]`);
console.log(`reverse([1, 2, 3, 4, 5]) to return [5, 4, 3, 2, 1] : [${reverse([1, 2, 3, 4, 5])}]`);
console.log(`reverse([2, 10, 13, 5]) to return [5, 10, 13, 2] : [${reverse([2, 10, 13, 5])}]`);
