# Lesson 1 — Memory & Arrays (the foundation)

## The one mental model
Computer memory = one long row of numbered boxes (addresses), each holding 1 byte.
**Every data structure is just a strategy for arranging data in this row.**
There are only two fundamental strategies:
- **A. Contiguous** → put items next to each other (an **array**)
- **B. Linked** → scatter items, connect them with pointers (next lesson)

## Arrays = contiguous
Reserve N boxes in a row. Each element is `elementSize` bytes apart.

```
index:    0    1    2    3    4
addr:   100  104  108  112  116     (elementSize = 4)
        [ 7][ 3][ 9][ 2][ 5]
```

### Why indexing is O(1)
```
address = startAddress + index × elementSize
```
One multiply + one add. **The array's length is NOT in the formula** → that's
*why* `arr[1000]` is no slower than `arr[2]`. Constant time, O(1).

### The tradeoff (the array's "personality")
| Operation            | Cost  | Why |
|----------------------|-------|-----|
| Access by index      | O(1)  | direct address formula |
| Insert/delete middle | O(n)  | all later elements must shift to keep the row packed |
| Insert at front      | O(n)  | everything shifts right |
| Append at end        | O(1)* | nothing after it to move — *unless the reserved row is full |
| Grow past capacity   | O(n)  | allocate a bigger row elsewhere + **copy everything** over |

\* "amortized O(1)" — most appends are cheap; the occasional grow-and-copy
averages out. (Full treatment of *amortized* comes later.)

## Big-O so far
Big-O answers: **as data grows, how does the work grow?**
- O(1) = doesn't grow (indexing)
- O(n) = grows in step with size (shifting / copying)

## Where this lives in real systems / my work
- JS `Array`, **Go slice** = contiguous block. A Go slice is `{ptr, len, cap}`;
  when `len` hits `cap`, append reallocates ~2× and copies → the O(n) spike.
- Postgres row data on a page, nginx/OpenResty HTTP buffers = contiguous bytes.

## Self-check (answer cold, no peeking)
1. Why is `arr[1000]` no slower than `arr[2]`? (state the formula)
2. Insert at the front of `[7,3,9,2,5]` — cost and why?
3. Why does a Go `append` occasionally spike to O(n)?
