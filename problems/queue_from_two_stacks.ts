import { Stack } from "../structures/stack";

// Problem: Implement a Queue (FIFO) using ONLY two Stacks.
// You may use Stack's push/pop/peek/size/isEmpty — nothing else.
// No arrays, no shift, no reaching into .stack directly.
//
// Required ops, all behaving like a normal queue:
//   enqueue(x)  add to back
//   dequeue()   remove + return front, or undefined if empty
//   peek()      return front without removing, or undefined if empty
//   size()
//   isEmpty()
//
// Target: dequeue should be AMORTIZED O(1). (Think about when you move
// items between the two stacks — and how often any single item moves.)

export class QueueFromStacks<T> {
  private inbox = new Stack<T>();
  private outbox = new Stack<T>();

  enqueue(item: T): void {
    // your code
    this.inbox.push(item);
  }

  dequeue(): T | undefined {
    if (this.outbox.isEmpty()) {
      while (!this.inbox.isEmpty()) {
        let ele = this.inbox.pop();
        ele !== undefined && this.outbox.push(ele);
      }
    } 
      return this.outbox.pop();
  }

  peek(): T | undefined {
    if (this.outbox.isEmpty()) {
      while (!this.inbox.isEmpty()) {
        let ele = this.inbox.pop();
        ele !== undefined && this.outbox.push(ele);
      }
    } 
    return this.outbox.peek();
  }

  size(): number {
    return this.inbox.size() + this.outbox.size();
  }

  isEmpty(): boolean {
    // your code
    return this.outbox.isEmpty() && this.inbox.isEmpty();
  }
}
