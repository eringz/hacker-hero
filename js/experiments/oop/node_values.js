/**
 * In the previous excercises. you've seen how starting from the first node, 
 * we could reference the values in the other connected nodes by doing for example node1.next.next.value.
 * Do you think we could create a function instead that prints each value in the connected node without us having to manually type ".next.next", etch?
 * 
 * For example, consider the nodes that are connected as follows:
 * 
 *  3 -> 5 -> 7 -> 1 -> 2 -> 59
 * 
 * Complete the function printValues() where it starts whith node1 and prints each value in the connected nodes.
 */
class Node
{
    constructor (value)
    {
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(3);
let node2 = new Node(5);
let node3 = new Node(7);
let node4 = new Node(1);
let node5 = new Node(2);
let node6 = new Node(59);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;


function printValues ()
{
    let runner = node1;
    while (runner !== null)
    {
        console.log(runner.value);
        runner = runner.next
    }
}


console.log(`\nTest Case (1/1)\n`);

console.log('printValues() to log 3 5 7 1 2 59');

console.log('\nOutput\n');

console.log(printValues());
