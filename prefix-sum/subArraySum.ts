

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

console.log(subArraySum([1,1,1],2))
console.log(subArraySum([1,7,4,3,5,6],7))