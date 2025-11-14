/**
 * Consider the code below. Note how 5 nodes are connected this way.
 * 3->5->7->1->2
 * 
 * In this exercises, your task is to add the appropriate code below so that the nodes are connected this way instead:
 * 3->5->7->2
 *  
 * In other words, instead of having the 3rd node connected to 4th node, you're going to have the 3rd node connect directly to the 5th node.  
 * This essentially "removes" the 4th node from the nodes that are connected/chained together.
 * 
 * Do NOT change the 'value' for any of the nodes. For the appropriate node, only change where its 'next' is pointing to.
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

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node3.next = node5;

console.log('\nTest Cases (4/4)\n');

console.log('node1.value to equal 3');
console.log('node3.next.value to equal 2');
console.log('node3.next.next to equal null');
console.log('node1.next.next.next.value to equal 2');

console.log('\nOutput\n');

console.log(node1.value);
console.log(node3.next.value);
console.log(node3.next.next);
console.log(node1.next.next.next.value);

