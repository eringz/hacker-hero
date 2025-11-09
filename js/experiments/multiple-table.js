/**
 * Crete a function that prints a multipliction table such as follows:
 * multiTable(2,2) should print
 * 1 2
 * 3 4
 * multiTable(3, 3) should print
 * 1 2 3
 * 4 5 6
 * 7 8 9
 */
function multiTable(x, y)
{
    let str = "";
    let product = 1;
    for (let i = 1; i <= y; i++)
    {
        for (let j = 1; j <= x;j++)
        {
            console.log(str += i*j);
            if (i == x) {
                console.log('\n')
            }
        }
    }
}

console.log(`Test Cases(4/4)\n`);

console.log('multiTable(2,2) to log 1 2 2 4');
console.log('multiTable(3,3) to log 1 2 3 2 4 6 3 6 9');
console.log('multiTable(2,4) to log 1 2 2 4 3 6 4 8');
console.log('multiTable(5,8) to log 1 2 3 4 5 2 4 6 8 10 3 6 9 12 15 4 8 12 16 20 5 10 15 20 25 6 12 18 24 30 7 14 21 28 35 8 16 24 32 40')

console.log(`\nOutput`);

console.log(multiTable(2,2));
console.log(multiTable(3,3));
console.log(multiTable(2,4));
console.log(multiTable(5,8));