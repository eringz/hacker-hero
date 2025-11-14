/**
 * Creates a function twoDimensional(row, column) that returns a two dimensional array containing bunch of zeros but where the outer values
 * are filled with ones. For example twoDimensional(5,5) should return the following array:
 * 
 * [
 *  [1,1,1,1,1],
 *  [1,0,0,0,1],
 *  [1,0,0,0,1],
 *  [1,0,0,0,1],
 *  [1,1,1,1,1],
 * ]
 */

function twoDimensional (row, column)
{
    let arr = [];
    let temp = [];

    for (let i = 0; i < row; i++)
    {
        // let temp = [];
        for (let j = 0; j < column; j++)
        {
            if (j > 0 &&  j < column-1 && i > 0 && i < row-1 )
            {
                temp.push(0);
            }
            else
            {
                temp.push(1);
            }
        }
        arr.push(temp);
    }

    return arr;
}

console.log('Test Cases 3/3\n');

console.log('twoDimensional(2,5) to return [[1,1,1,1,1],[1,1,1,1,1]]')
console.log('twoDimensional(5,5) to return [[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]');
console.log('twoDimensional(8,8) to return  [[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1]]');


console.log('\nOutput\n');

console.log(twoDimensional(2,5));
console.log(twoDimensional(5,5));
console.log(twoDimensional(8,8));

