import { describe, it, expect } from "vitest";
import { Stack } from "./stack";

// describe() groups related tests. it() is one test case — read it as a
// sentence: "it returns items in LIFO order". expect(x).toBe(y) is the
// assertion: if x !== y the test fails and vitest shows you both values.
describe("Stack", () => {
  it("starts empty", () => {
    const s = new Stack<number>();
    expect(s.isEmpty()).toBe(true);
    expect(s.size()).toBe(0);
    expect(s.peek()).toBeUndefined();
  });

  it("pushes and reports size", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    expect(s.size()).toBe(2);
    expect(s.isEmpty()).toBe(false);
  });

  it("pops in LIFO order (last in, first out)", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).toBe(3); // most recent first
    expect(s.pop()).toBe(2);
    expect(s.pop()).toBe(1);
  });

  it("peek reads the top without removing it", () => {
    const s = new Stack<string>();
    s.push("a");
    s.push("b");
    expect(s.peek()).toBe("b");
    expect(s.size()).toBe(2); // peek did NOT mutate
  });

  // The exact bug we fixed: a falsy top value must survive a peek.
  it("peek does not destroy a falsy top value (0)", () => {
    const s = new Stack<number>();
    s.push(0);
    expect(s.peek()).toBe(0);
    expect(s.size()).toBe(1); // 0 is still there
  });

  it("pop on empty returns undefined", () => {
    const s = new Stack<number>();
    expect(s.pop()).toBeUndefined();
  });
});
