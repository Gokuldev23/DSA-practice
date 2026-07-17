import { Stack } from "./stack";

export class MinStack<T extends number> {
  stack: T[];
  minStack = new Stack<number>()
  constructor(ele: T[] = []) {
    this.stack = ele;
  }

  push(item: T) {
    this.stack.push(item); // O1 - adding end , so rearrage
    let last = this.minStack.peek()
    if(last) {
        this.minStack.push(Math.min(item,last))
        return
    }
    this.minStack.push(item)
  }

  pop(): T | undefined {
    let last = this.stack.pop(); //O1 - inbuilt pop is O1
    this.minStack.pop()
    return last;
  }

  peek(): T | undefined {
    let ele = this.stack[this.stack.length - 1];
    return ele; //O1 - straight jump to an index so
  }

  size(): number {
    return this.stack.length; //O1 - inbuit
  }

  isEmpty(): boolean {
    return this.size() === 0; //O1 - inbuilt
  }

  getMin(): number | T | undefined {
    return this.minStack.peek();
  }
}
