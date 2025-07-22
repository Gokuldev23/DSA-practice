



const sieveOfEratosthenes = (num:number) => {


    let res:number[] = []

    let isPrime:boolean[] = Array(num+1).fill(true)

    isPrime[0] = isPrime[1] = false

    for (let i = 2; i*i<= num; i++) {
        if(isPrime[i]){
            for (let j = i*i; j <= num; j+=i) {
                isPrime[j] = false
            }
        }
    }

    for(let i = 2;i<=isPrime.length;i++){
        if(isPrime[i]) 
            res.push(i)
    }

    return res

}


console.log(sieveOfEratosthenes(10))