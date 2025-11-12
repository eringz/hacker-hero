/**
 * Create a function that returns a two-dimensional array containing a bunch of zeros. 
 * For example, twoDimensional(2,5) should return following array.
 * [
 *  [0,0,0,0,0],
 *  [0,0,0,0,0]
 * ]
 * 
 * One way to visualize this two-dimensional array is to think of the above as a 2-row, 5-column matrix.
 * You could also write the above array to be as follows: [[0,0,0,0,0], [0,0,0,0,0]. 
 * Whenever you're dealing when with two-dimensional arrays, be extra cautious on every single character. 
 * A simple typo or forgetting to add a comma or square bracket can ruin the whole program.
 */
function twoDimensional(row, column) {
    let arr = [];

    for (let i = 0; i < row; i++) 
    {
        let temp = [];
        for (let j = 0; j < column; j++) 
        {
            temp.push(0);
        }
        arr.push(temp);
    }

    return arr;
}

console.log(`Test Cases(3/3)\n`);

console.log('twoDimensional(2,5) to return [[0,0,0,0,0],[0,0,0,0,0]]');
console.log('twoDimensional(3,4) to return [[0,0,0,0],[0,0,0,0],[0,0,0,0]]');
console.log('twoDimensional(1,5) to return [[0,0,0,0,0]]');

console.log(`\nOutput`);

console.log(twoDimensional(2, 5));
console.log(twoDimensional(3, 4));
console.log(twoDimensional(1, 5));