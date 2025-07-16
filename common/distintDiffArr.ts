

//brute-force
function distinctDifferenceArray(array: number[]) {
    

    let prefixSeen = new Set<number>()
    let suffixSeen = new Set<number>()
    let prefixArr: number[] = []
    let suffixArr: number[] = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!prefixSeen.has(element)){
            prefixSeen.add(element)
        }
        prefixArr.push(prefixSeen.size)
    }

    for (let i = array.length - 1; i >= 0; i--) {
        suffixArr[i] = suffixSeen.size
        const element = array[i];
        if(!suffixSeen.has(element)){
            suffixSeen.add(element)
        }
    }

    return prefixArr.map((vl,i)=>vl-suffixArr[i])

};


console.log(distinctDifferenceArray([1,2,3,4,5]))
console.log(distinctDifferenceArray([3,2,3,4,2]))