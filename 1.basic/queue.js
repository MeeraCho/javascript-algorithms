// 1. Using an Array. 
// You can use arrays to implement a simple queue. 
// Use the push() method to enqueue elements and the shift() method to dequeue elements.

const queue = [];

// Enqueue
queue.push(1);
queue.push(2);
queue.push(3);

// Dequeue
const item = queue.shift();
console.log(item); // 1



// 2. Using a Custom Queue Class
// You can create a custom queue class that provides more control and methods for enqueueing and dequeueing.
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  const myQueue = new Queue();
  
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  console.log(myQueue.dequeue()); // 1
  console.log(myQueue.size());    // 2
  


// 3. Using a Double-Ended Queue (Deque)
// A deque allows you to enqueue and dequeue elements from both ends. You can use arrays or implement your own deque class.
const deque = [];

// Enqueue from the front
deque.unshift(1);
deque.unshift(2);

// Enqueue from the rear
deque.push(3);
deque.push(4);

// Dequeue from the front
const frontItem = deque.shift();
console.log(frontItem); // 2

// Dequeue from the rear
const rearItem = deque.pop();
console.log(rearItem);   // 4
