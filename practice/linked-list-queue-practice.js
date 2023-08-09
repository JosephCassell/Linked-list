// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let count = 0
        let current = this.head
        while(current){
            count++
            current = current.next
        }
        return count
        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        let count = 0
        let current = this.head
        while(current){
            count += current.value
            current = current.next
        }
        return count
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        if(!this.head) return 0
        return this.sumOfNodes() / this.listLength()
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        if(n < 0) return null
        let curr = this.head
        for(let i = 0; i < n && curr; i++){
            curr = curr.next
        }
        return curr
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        if(!this.head) {
            return null
        }
        let slow  = this.head;
        let fast = this.head;
        while(fast && fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow
        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        // Your code here
        const reversedList = new SinglyLinkedList();
        let current = this.head;
        while (current) {
          const newNode = new SinglyLinkedNode(current.value);
          newNode.next = reversedList.head;
          reversedList.head = newNode;
          current = current.next;
        }
        return reversedList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        let prev = null;
        let current = this.head;
        while (current) {
          const nextNode = current.next;
          current.next = prev;
          prev = current;
          current = nextNode;
        }
        this.head = prev;
      }
        // Write your hypothesis on the time complexity of this method here
    }



class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        if(!this.head) {
            return null
        }
        let slow  = this.head;
        let fast = this.head;
        while(fast && fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here
        const reversedList = new DoublyLinkedList();

        let current = this.tail;
        while (current) {
            reversedList.addToTail(current.value);
            current = current.prev;
        }

        return reversedList;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        if (!this.head) {
            return;
        }

        let current = this.head;
        while (current) {
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;

            if (!temp) {
                this.head = current;
            }

            current = temp;
        }
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
