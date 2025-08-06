
const gcdNum = (a:number,b:number) => {
    return b === 0 ? a : gcdNum(b,a%b)
}


const lcm = (a:number,b:number) => {
    return (a*b)/gcdNum(a,b)
}

const betweenTwoSets = (num1:number[],num2:number[]) => {

    let num1Lcm = num1[0]

    for (let i = 1; i < num1.length; i++) {
      const element = num1[i];
      num1Lcm = lcm(num1Lcm, element);
    }
    
    let num2Gcd = num2[0]

    for (let i = 1; i < num2.length; i++) {
        const element = num2[i];
        num2Gcd = gcdNum(num2Gcd,element)
    }

    let setCount = 0
    let multiple = 0
    while(multiple<=num2Gcd){
        if(num2Gcd%multiple === 0) {
            setCount++
        }
        multiple+=num1Lcm
    }

    return setCount

}


console.log(betweenTwoSets([2,6],[12,24]));
