/**
 * ✅ Solved on 2025-07-12
 * Leetcode #438
 * Approach: Sliding window + Two pointers
 * Time: O(n * m), Space: O(1)
 * Where n = s.length, m = p.length
 */


const findAnagrams = (s, p) => {
    let arr = Array(26).fill(0)
    
    for(let char of p) {
        arr[char.charCodeAt() - 97] +=1
    }
    
    let res = []
    let pLen = p.length - 1
    
    let l = 0
    let r = pLen
    
    while(r < s.length) {
        
        let win = Array(26).fill(0)
        for(let i=l;i<=r;i++) {
            win[s[i].charCodeAt() - 97] +=1
        }
        
        if(win.join("") === arr.join("")){
            res.push(l)
        }
        l++
        r++
    }
    
    return res
}

