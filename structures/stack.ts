export class Stack<T> {
  stack: T[];

  constructor(ele:T[] = []) {
    this.stack = ele;
  }

  push(item: T) {
    this.stack.push(item); // O1 - adding end , so rearrage
  }

  pop(): T | undefined {
    return this.stack.pop(); //O1 - inbuilt pop is O1
  }

  peek(): T | undefined {
    let ele = this.stack[this.stack.length - 1] 
    return ele; //O1 - straight jump to an index so
  }

  size():number {
    return this.stack.length //O1 - inbuit
  }

  isEmpty():boolean {
    return this.size() === 0 //O1 - inbuilt
  }

}

