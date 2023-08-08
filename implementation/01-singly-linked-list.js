// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (!this.head) {
            return undefined;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        this.length--;
        return removedNode;
        // Write your hypothesis on the time complexity of this method here
    }


    removeFromTail() {
        if (!this.head) {
            return undefined;
        }
        if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.length--;
        return current;
    }

    peekAtHead() {
        if (!this.head) {
            return undefined;
        }
        return this.head.value;
    }

    print() {
        // Print out the linked list

        // Your code here
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
