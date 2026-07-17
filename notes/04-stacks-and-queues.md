# Lesson 4 — Stacks & Queues

## The core idea
Not new memory shapes — an **array or linked list with a rule bolted on** about which
end you may touch. The *restriction* is the feature: you give up random access to
**guarantee an ordering discipline**, and that discipline is what makes them O(1).

## Stack — LIFO (Last In, First Out)
One open end. Push/pop the **top**. Most-recently-added comes out first.

```
push A,B,C        pop() → C
┌───┐             ┌───┐
│ C │ ← top       │ B │
│ B │             │ A │
│ A │             └───┘
└───┘
```
Use when: "deal with the most recent thing first" — reverse, undo, nesting, backtracking.

## Queue — FIFO (First In, First Out)
Two ends, different jobs: **enqueue at back, dequeue from front**. Oldest comes out first.

```
enqueue → [ A  B  C ] → dequeue
          back    front  (A leaves first)
```
Use when: "first-come-first-served / arrival order" — buffering, scheduling, BFS.

## Operations — all O(1), *because* restricted
| op | stack | queue | cost |
|----|-------|-------|------|
| add | push | enqueue | O(1) — touch one known end, nothing shifts |
| remove | pop | dequeue | O(1) |
| peek | peek | peek | O(1) — pure read of the end slot |
| search middle | ✗ | ✗ | not offered on purpose |

Fast precisely because nothing in the middle ever moves (contrast array insert-at-front = O(n)).

## The queue trap (important)
Array-backed `dequeue` via `array.shift()` is **O(n)** — index 0 is removed and every
element slides left (same memory cost as lesson 1 insert-at-front).

**Fix — head pointer:** don't move elements, move your *idea of the front*.
```ts
private head = 0;
dequeue() { const x = this.q[this.head]; this.head++; return x; } // O(1)
size()    { return this.q.length - this.head; }
```
**Tradeoff (space-time, lesson on Big-O):** dequeued slots never leave the array → it
grows with *total ever enqueued*, not current size = a **space leak**. Production fixes:
**compaction** (`slice` off the dead prefix when head gets large → amortized O(1)) or a
**circular buffer** (wrap indices with modulo, reuse slots — how nginx fixed buffers work).

## Where it lives / my work
- **Call stack** — every function call pushes a stack frame; return pops. Infinite
  recursion = `Maximum call stack size exceeded` (this stack hits its limit). LIFO.
- **nginx/OpenResty listen queue** (`backlog`/`somaxconn`) — requests served FIFO; overflow = connection refused.
- **Postgres lock waiters** — FIFO for fairness (no writer starvation).
- Undo = stack of states. Browser back = stack of pages.

## The payoff — Valid Parentheses
A closing bracket must match the **most recently** opened one → "most recent first" = LIFO
= a stack. Push openings; on a closing, the top must be its pair (pop) else invalid; at the
end the stack must be empty (no unclosed openings). Time **O(n)**, space **O(n)** (worst case
`"((("` holds all n). The order case `"([)]"` is why it can't be done by counting alone.

## Self-check
1. Stack vs queue in one word each (the acronym) — and which end(s) each touches.
2. Why are all the core ops O(1)? What would break that for a queue, and how do you fix it?
3. The head-pointer queue is O(1) dequeue — what does it cost, and what's the fix?
4. Why is Valid Parentheses a *stack* problem? What's the one word that proves it?
