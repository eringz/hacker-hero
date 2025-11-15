/**
 * Your objective is to create two methods for the singly linked list: add_to_front() and print values();
 * 
 * Instead of adding a node to the end of the linked list as done previously, add_to_front() should insert a new node for the front of the linked list.
 * 
 * For example, imagine an empty linked list called list where following codes were implement afterwards.
 *  
 * list.add_to_front(2);
 * list.add_to_front(5);
 * list.add_to_front(10);
 * 
 * This would create linked list that are connected as follows
 * 
 * list's head -> 10 -> 5 -> 2
 * 
 * Your are also expected to implement print_values() that starts from the beginning of the linked list and print/log each value in the node.
 * For example, calling list.print_values() should print 10, 5, and 2.
 */
class Slist 
{
    constructor ()
    {
        this.head = null;
    }

    add_to_front (value)
    {
        let node = new Node(value)
        if (this.head === null)
        {
            this.head = node;
            return;

        }
        console.log('1:', node);

        node.next = this.head;
        this.head = node;
        console.log('2:', node);

    }

    print_values ()
    {
        let runner = this.head;

        while (runner !== null)
        {
            console.log(runner.value);
            runner = runner.next;
        }


    }
}

class Node 
{
    constructor (value)
    {
        this.value = value;
        this.next = null;
    }
}


let list = new Slist();
list.add_to_front(2);
list.add_to_front(5);
list.add_to_front(10);

console.log('\nTest Cases (4/4)\n');

console.log('list.head.value to return 10');
console.log('list.head.next.value to return 5');
console.log('list.head.next.next.value to return 2');

console.log('\nOutput\n');

console.log(list.head);
console.log(list);
// console.log(list.head.value);
// console.log(list.head.next.value);
// console.log(list.head.next.next.value);
console.log(list.print_values());

