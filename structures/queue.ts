

export class Queue<T> {

    queue : T[]
    private head: number = 0
    constructor(initial:T[] =[]){
        this.queue = initial
    }

    enqueue(item:T):void {
      this.queue.push(item); // this is amortized O(1)
    }
    dequeue():T | undefined {
        if (this.size() == 0) return undefined
        let front = this.queue[this.head]
        this.head++
        return front // this is O(1) , we are not moving anything inside aray
    }
    peek():T|undefined {
        return this.queue[this.head] // just jump to index so O(1)
    }
    size():number {
        return this.queue.length - this.head // O(1)
    }
    isEmpty():boolean {
        return this.size() === 0 // O(1)
    }
}
