

const stringMultiply = (num1:string,num2:string) => {

    if(num1 === "0" || num2 === "0") return "0"

    let resArr = Array(num1.length + num2.length).fill(0)
    let zeroCharCode = "0".charCodeAt(0)

    for(let i = num1.length - 1;i>=0;i--) {
        for(let j = num2.length - 1;j>=0;j--) {
            let mult = (num1[i].charCodeAt(0) - zeroCharCode) * (num2[j].charCodeAt(0) - zeroCharCode)
            let sum = mult + resArr[i+j+1]
            resArr[i+j] += Math.floor(sum/10)
            resArr[i+j+1] = sum % 10 
        }
    }

    while(resArr[0] === 0) {
        resArr.shift()
    }
    return resArr.join("")

}

console.log(stringMultiply("4","6"))
console.log(stringMultiply("123", "456"));