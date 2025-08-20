/**
 * ✅ Solved on 2025-08-20
 * Leetcode #380
 * Approach: HashTable
 * Time: O(1), Space: O(n)
 * Where n = set.size
 */

class RandomizedSet {
  set: Set<number>;
  constructor() {
    this.set = new Set();
  }

  insert(val: number): boolean {
    if (this.set.has(val)) {
      return false;
    }
    this.set.add(val);
    return true;
  }

  remove(val: number): boolean {
    if (this.set.has(val)) {
      this.set.delete(val);
      return true;
    }
    return false;
  }

  getRandom(): number {
    let len = this.set.size;
    let random = Math.floor(Math.random() * len);
    return [...this.set][random];
  }
}

var obj = new RandomizedSet();
var param_1 = obj.insert(2);
var param_2 = obj.remove(3);
var param_3 = obj.getRandom();
