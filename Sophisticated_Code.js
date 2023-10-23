/* 
Filename: Sophisticated_Code.js

Description: This code is a sophisticated example that demonstrates a custom implementation of a linked list data structure in JavaScript. It includes various methods such as insertion, deletion, searching, and displaying the linked list.

Note: For better understanding of the code, please read the accompanying comments.

*/

// Node class represents each individual node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class represents the entire linked list and defines various operations
class LinkedList {
  constructor() {
    this.head = null; // Head points to the first node in the list
    this.size = 0; // To keep track of the number of nodes in the list
  }

  // Method to insert a node at the end of the list
  insert(data) {
    let node = new Node(data); // Create a new node with the given data

    // If the list is empty, make the new node the head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      // Traverse to the last node
      while (current.next) {
        current = current.next;
      }

      // Append the new node to the end
      current.next = node;
    }

    this.size++;
  }

  // Method to delete a node from the list
  delete(data) {
    let current = this.head;
    let prev = null;

    // Traverse to find the desired node
    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    // If node to be deleted is found
    if (current) {
      // If the node to be deleted is the head
      if (prev === null) {
        this.head = current.next;
      } else {
        prev.next = current.next;
      }

      this.size--;
    }
  }

  // Method to search for a given value in the list
  search(data) {
    let current = this.head;

    // Traverse and compare the value
    while (current) {
      if (current.data === data) {
        return true; // Value found
      }
      current = current.next;
    }

    return false; // Value not found
  }

  // Method to display the elements of the linked list
  display() {
    let current = this.head;
    let result = '';

    // Traverse and concatenate data values to result string
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }

    console.log(result.trim());
  }

  // Method to get the length of the linked list
  getLength() {
    return this.size;
  }
}

// Create a new instance of LinkedList
const linkedList = new LinkedList();

// Insert nodes into the linked list
linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);
linkedList.insert(40);

// Display the linked list
linkedList.display(); // Output: 10 20 30 40

// Search for a specific value in the list
console.log(linkedList.search(30)); // Output: true

// Delete a node from the list
linkedList.delete(20);

// Display the updated linked list
linkedList.display(); // Output: 10 30 40

// Get the length of the linked list
console.log('Length:', linkedList.getLength()); // Output: Length: 3