class Node 
{
    constructor (value)
    {
        this.value = value
        this.next = null;
    }
}

// Code Snippet below
const node1 = new Node(5);
const node2 = new Node(7);
node1.next = node2;





console.log('\nTest Cases (4/4)');

console.log('node1.value to equal 5');
console.log('node2.value to equal 7');
console.log('node1.next.value to equal 7');
console.log('node1.next.next to equal null');


console.log('\nOutput\n');

console.log(node1.value);
console.log(node2.value);
console.log(node1.next.value);
console.log(node1.next.next);