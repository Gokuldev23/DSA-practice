


const minWindowSubstring = (s:string,k:string) => {

    let charCodeA = "A".charCodeAt(0)
    let freqK = Array(26).fill(0)

    let kSet = new Set(k.split(""))



    for (let char of k) {
        freqK[char.charCodeAt(0) - charCodeA] +=1
    }

    let left = 0
    let right = 0
    let res = ""

    while(right<s.length - 1) {

        while(!kSet.has[s[left]]){
            left++
        }
        let freqS = Array(26).fill(0)
        if(kSet.has(s[right])){
            freqS[s[right].charCodeAt(0) - charCodeA]+=1
        }

        if(freqS.join("") === freqK.join("")){

            if(res == "") {
                res = s.slice(left,right)
            }else if(right-left<res.length){
                res = s.slice(left,right)
            }

            freqS[left]--
        }
        right++
    }
    return res
}

let s = "ADOBECODEBANC"
let k = "ABC"
console.log(minWindowSubstring(s,k));
