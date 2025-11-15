/**
 * Instead of creating a variable whenever we create a node,
 * there is a better way to organize all the nodes. 
 * What we're going to do is create another object called 'list'. 
 * For now, let's have a 'list' have a single property called head.
 * Initially let's set it up so that 'head' is null when there is no node on the list.
 * However, when the first node is created, have head point to the first node.
 * 
 * Your task is to finish the implementation of the add method so that others can add a method to continue adding a new node to the list.
 * 
 * For example,
 * list.add(3);
 * list.add(5);
 * list add(7);
 * This would create a linked that looks as follows
 * list's head -> 3 -> 5 -> 7
 * 
 * As each node connects to another node with a single reference, this list is reffered as a Singly Linked List, 
 * a common data structure that may be asked during technical interviews.
 */
class Slist
{
    constructor ()
    {
        this.head = null;
    }

    add_to_back (value)
    {
        let runner = this.head;
        let node = new Node(value)
        if (this.head === null)
        {
            this.head = node;
            return;
        }

        while (runner.next !== null)
        {
            runner = runner.next;
        }

        runner.next = node;

        
        
    }
}

class Node 
{
    constructor (value)
    {
        this.value = value
        this.next = null;
    }
}

let list = new Slist();
list.add_to_back(3);
list.add_to_back(5);
list.add_to_back(7);
list.add_to_back(9); 

console.log('\nTest Cases (3/3)');

console.log('list.head.value to return 3');
console.log('list.head.next.value to return 5');
console.log('list.head.next.next.value to return 7');

console.log(list);
console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);
console.log(list.head.next.next.next.value);