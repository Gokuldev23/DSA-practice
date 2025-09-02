/**
 * ✅ Solved on 2025-07-23
 * Leetcode #30
 * Approach: Hash Map, Sliding Window
 * Time: O(n), Space: O(n+m)
 * Where n = s.length , m = words.length
 */

const findSubStr = (words: string[], s: string) => {
  let wordsLen = words.length;
  let wLen = words[0]?.length;
  let wordMap = new Map<string, number>();

  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }

  let need = wordMap.size;
  let subStrLen = wordsLen * wLen;
  let l = 0;
  let r = subStrLen;
  let res: number[] = [];

  while (r <= s.length) {
    let currWord = s.substring(l, r);
    if (checkComb(currWord, wLen)) {
      res.push(l);
    }
    l++;
    r++;
  }

  function checkComb(word: string, wlen: number) {
    let wFreq = new Map<string, number>();
    let have = 0;
    for (let i = 0; i < word.length; i += wlen) {
      let w = word.substring(i, i + wlen);
      wFreq.set(w, (wFreq.get(w) || 0) + 1);
      if (wordMap.has(w) && wFreq.get(w) == wordMap.get(w)) {
        have++;
      }
    }
    return have == need;
  }

  return res;
};

console.log(findSubStr(["foo", "bar"], "barfoothefoobarman"));
