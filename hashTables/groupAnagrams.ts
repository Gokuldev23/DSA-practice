/**
 * ✅ Solved on 2025-07-18
 * LeetCode #49
 * Approach: HashMap
 * Time: O(n * k), Space: O(n)
 * Where (n = number of strings, k = average string length)
 */


function groupAnagrams(strs:string[]):string[] {

        let hashMap = new Map()
        const getCount = (str:string) => {
            let arr = Array(26).fill(0)

            for(let i=0;i<str.length;i++) {
                let ind = str.charCodeAt(i) - "a".charCodeAt(0)
                arr[ind]+=1
            }
            let key = arr.join(",")
            if(hashMap.has(key)){
                let curr = hashMap.get(key)
                hashMap.set(key,[...curr,str])
            }else{
                hashMap.set(key,[str])
            }
        }

        for(let i=0;i<strs.length;i++) {
            getCount(strs[i])
        }

        return Array.from(hashMap.values())

}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]))