import { describe, it, expect } from "vitest";
import { Queue } from "./queue";

// describe() groups related tests. it() is one test case — read it as a
// sentence: "it returns items in FIFO order". expect(x).toBe(y) is the
// assertion: if x !== y the test fails and vitest shows you both values.
describe("Queue", () => {
  it("starts empty", () => {
    const s = new Queue<number>();
    expect(s.isEmpty()).toBe(true);
    expect(s.size()).toBe(0);
    expect(s.peek()).toBeUndefined();
  });

  it("pushes and reports size", () => {
    const s = new Queue<number>();
    s.enqueue(1);
    s.enqueue(2);
    expect(s.size()).toBe(2);
    expect(s.isEmpty()).toBe(false);
  });

  it("pops in FIFO order (first in, first out)", () => {
    const s = new Queue<number>();
    s.enqueue(1);
    s.enqueue(2);
    s.enqueue(3);
    expect(s.dequeue()).toBe(1); // most oldest first
    expect(s.dequeue()).toBe(2);
    expect(s.dequeue()).toBe(3);
  });

  it("peek reads the top without removing it", () => {
    const s = new Queue<string>();
    s.enqueue("a");
    s.enqueue("b");
    expect(s.peek()).toBe("a");
    expect(s.size()).toBe(2); // peek did NOT mutate
  });

  it("peek does not destroy a falsy top value (0)", () => {
    const s = new Queue<number>();
    s.enqueue(0);
    expect(s.peek()).toBe(0);
    expect(s.size()).toBe(1); 
  });

  it("pop on empty returns undefined", () => {
    const s = new Queue<number>();
    expect(s.dequeue()).toBeUndefined();
  });

  it("isEmpty test", () => {
    const s = new Queue<number>();
    s.enqueue(0);
    s.enqueue(1);
    s.dequeue()
    s.dequeue()
    expect(s.isEmpty()).toBe(true);
  });


});
