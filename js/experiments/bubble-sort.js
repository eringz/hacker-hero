/**
 * Understanding how to implement basic sorting algorithm is a good exercise.
 * For this particular challenge, you are to implement bubble sort.
 * The animation demonstrates how bubble sort works "https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif".
 * You'll note that all sorting algorithms have two for loops. 
 * For buble sort, you also need two loops (one inside each other)
 */
function bubbleSort(arr)
{   let temp = arr[0];
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr.length; j++)
        {
            if (arr[j] > arr[j+1])
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            // console.log(arr[0]);
        }
    }
    return arr;
}

console.log(`Test Cases(4/4)\n`);

console.log('bubbleSort([5,3,1,2]) to return [1,2,3,5]');
console.log('bubbleSort([5,4,3,2,1]) to return [1,2,3,4,5]');
console.log('bubbleSort([5, 3, 1, -1, -3]) to return [-3,-1,1,3,5]');
console.log('bubbleSort([5, 3, 1]) to return [1,3,5]');

console.log(`\nOutput`);

console.log(bubbleSort([5,3,1,2]));
console.log(bubbleSort([5,4,3,2,1]));
console.log(bubbleSort([5, 3, 1, -1, -3]));
console.log(bubbleSort([5, 3, 1]))