/**
 * Continuing from the previous excercise, now create five nodes and have all these five nodes be connected to look like these:
 * 3 -> 5 -> 7 -> 1 -> 2
 * One way to do this is by naming the nodes as 'node1', 'node2', 'node3', 'node4', and 'node5', 
 * where 'node1' has a value of 3 and the following nodes (node2,node3,node4, and node5) have the value of 5,7,1, and 2 respectively.
 * Then you could have node1's next point to node2; node2's next point to node3;node3's next point to node4 and so forth.
 * 
 * The are other ways to do this also, so choose the route that seems most logical to you.  
 */
class Node 
{
    constructor (value)
    {
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(7);
const node4 = new Node(1);
const node5 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node5.next = node1;

console.log('\nTest Cases (6/6)');

console.log('node1.value to equal 3');
console.log('node1.next.value to equal 5');
console.log('node1.next.next.value to equal 7');
console.log('node1.next.next.next.value to equal 1');
console.log('node1.next.next.next.next.value to equal 2');
console.log('node1.next.next.next.next.next.value to equal null');

console.log('\nOutput\n');

console.log(node1.value);
console.log(node1.next.value);
console.log(node1.next.next.value);
console.log(node1.next.next.next.value);
console.log(node1.next.next.next.next.value);
console.log(node1.next.next.next.next.next);
