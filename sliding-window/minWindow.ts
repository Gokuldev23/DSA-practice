


const minWindowSubstring = (s:string,k:string):string => {

    let kFreq = Array(26).fill(0)

    let kMap = new Set(k.split(""))

    let ACharCode = "A".charCodeAt(0)

    for(let char of k) {
        kFreq[char.charCodeAt(0) - ACharCode]+=1
    }

    let l = 0
    let r = 0
    let res = ""
    let copyKFreq = [...kFreq]
    while(r<=s.length) {
       if(kMap.has(s[r])){
           copyKFreq[s[r].charCodeAt(0) - ACharCode]-=1
           if(copyKFreq.every(num=>num<=0)){
            copyKFreq = [...kFreq]
            if(res === "") {
                res = s.substring(l,r)
            }else if(s.substring(l,r).length<res.length){
                res = s.substring(l,r)
            }
            l++
          }
       }
       r++
    }
 
    return res
}

let s = "ADOBECODEBANC"
let k = "ABC"
console.log(minWindowSubstring(s,k));
