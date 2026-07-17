# Lesson 2 — Linked Lists (Strategy B: linked, not contiguous)

## The idea
Give up the contiguous row. Let items live **anywhere** in memory; each item
stores the **address of the next item**. You hold only the **head** (first node).

```
 head
  │
  ▼
┌──────┬──────┐   ┌──────┬──────┐   ┌──────┬──────┐
│val:7 │next ─┼──▶│val:3 │next ─┼──▶│val:9 │next:∅│
└──────┴──────┘   └──────┴──────┘   └──────┴──────┘
```
A **node** = `{ value, next }`. Last node's `next` = null/nil.

## The trade (mirror image of an array)
| Operation                     | Array | Linked list |
|-------------------------------|-------|-------------|
| Access index `i`              | O(1)  | **O(n)** — must walk from head |
| Insert/delete at a KNOWN node | O(n)  | **O(1)** — rewire 2 pointers |
| Insert/delete by index        | O(n)  | O(n) — walk to find, then rewire |

- **Insert is O(1)** because you only rewire pointers (`A.next = X; X.next = B`) —
  nothing shifts.
- **Access is O(n)** because nodes are scattered → no address formula → you must
  follow `next` from the head.

**No free lunch:** linked list trades fast lookup for fast rearranging. Every
data structure is a chosen trade — derive the costs from the physical layout.

## Doubly linked list
Each node also stores `prev`. Lets you walk both ways and delete a node you're
standing on without first finding its predecessor. One extra pointer per node.

## Where it lives / my work
- **LRU cache** (= what a CDN/edge cache does): doubly linked list ordered by
  recency (front = just used, back = stalest). Access → move node to front (O(1)
  pointer rewire). Full → evict tail (O(1)). Paired with a hashmap (key→node) for
  O(1) lookup. List = ordering, hashmap = lookup; each covers the other's weakness.
- Queues, undo history, playlist prev/next. Go: `container/list`.

## Self-check
1. Why is list insert O(1) but array insert O(n)? (physical reason for each)
2. Why is accessing the 50th element the opposite — slow for list, fast for array?
3. Why a linked list (not array) inside an LRU cache?
