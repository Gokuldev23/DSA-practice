
//Brute force
const subArraySum = (array:number[],k:number) => {

    let count = 0

    array.forEach((val)=> val == k && count++)

    for (let i = 0; i < array.length; i++) {
        let sum = 0
        for (let j = i; j < array.length; j++) {
            sum+=array[j]
            if(sum === k ) {
                count++
            }
        }
        
    }
    return count
}

// console.log(subArraySum([1,1,1],2))
// console.log(subArraySum([1,7,4,3,5,6],7))

const subArraySumOptimzed  = (array:number[],k:number) => {

    let map = {0:1}
    let count = 0

    let prefixArr = array.reduce((accum: number[], val, i) => {
        accum.push(val + (accum[i - 1] ?? 0));
        return accum;
    }, []);

    for (let i = 1; i < array.length; i++) {
        
        let prefixSum = prefixArr[i-1] - k
        if(map[prefixSum]){
            count++
        }
        map[i] = prefixSum
    }

    return count

}

console.log(subArraySumOptimzed([1,7,4,3,5,6],7));
