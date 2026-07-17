# Lesson 3 — Hash Tables (Strategy C: hashed)

## The goal
O(1) lookup by an **arbitrary key** (string, etc.), not just a numeric index.

## The mechanism
A hash table is **an array underneath + a hash function** that manufactures the index.

```
key "gokul" ──hash()──▶ 8391774102 ──% 16──▶ index 6
                                               │
buckets:  [ ][ ][ ][ ][ ][ ][V][ ] ...         ▼  store / fetch here
                             6
```
- **hash function**: key → big number. Deterministic (same key → same number),
  scatters keys widely.
- **modulo size**: squashes that number into a valid array index.
- Store: `buckets[idx] = value`. Lookup: hash again → same idx → jump there → O(1)
  (inherits the array's address-formula speed).

## Collisions (must understand)
Two **different** keys can map to the same bucket. **Unavoidable**: infinitely many
possible keys, finitely many buckets → **pigeonhole principle** (10 pigeons, 9 holes
→ some hole holds 2).

**Chaining** (common fix): each bucket holds a **linked list** of all entries that
landed there; lookup walks that short list comparing keys.
→ Note: hash table = **array (L1) + linked lists (L2)** combined. Nothing new.

## Is it really O(1)?
- **O(1) average** — good hash + not too full → each chain ≈ 1 element.
- **O(n) worst case** — bad hash dumps everything in one bucket → one long chain.
- Real mechanism that keeps it near average: **resize + rehash** when ~75% full
  (bigger array, redistribute) — an O(n) "grow & copy", same idea as array growth.
- Interview-correct phrasing: **"O(1) average, O(n) worst-case."**

## Where it lives / my work
- JS `Map`/`Object`, Go `map`, Python `dict`.
- DB index (hash index for exact match; Postgres usually B-tree for ranges).
  Session/token → user lookup (Keycloak). The lookup half of an LRU cache.

## The payoff — prefix-sum trick IS this
"Subarray Sum Equals K": store `runningSum → count` in a hash table, then ask
"have I seen `runningSum - k`?" in **O(1)** → turns O(n²) into O(n). The speedup
*is* the O(1) hash lookup.

## Self-check
1. A hash table is "an ___ underneath plus a ___ that turns the key into an index."
2. What is a collision, why unavoidable (name the principle), one way to handle it?
3. Why "O(1) average but O(n) worst-case", and what mechanism keeps it near average?
