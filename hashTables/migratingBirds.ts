/**
 * ✅ Solved on 2025-08-17
 * Approach: HashMap
 * Time: O(n), Space: O(n)
 * Where (n = birds.length)
 */

const migratingBirds = (birds: number[]): number => {
  let freq:Record<number,number> = {};
  for (const id of birds) {
    freq[id] = (freq[id] || 0) + 1;
  }
  const bird = { type: Infinity, count: 0 };
  for (const b in freq) {
    if (
      freq[b] > bird.count ||
      (freq[b] === bird.count && Number(b) < bird.type)
    ) {
      bird.type = Number(b);
      bird.count = freq[b];
    }
  }
  return bird.type;
};

console.log(migratingBirds([1, 1, 2, 2, 3]));
