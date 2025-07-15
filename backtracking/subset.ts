


const subsets = (arr:number[]) => {

    let res:number[][] = []

    function backtrack (start,curr:number[]) {
        res.push([...curr])
        for(let i = start;i<arr.length;i++) {
            curr.push(arr[i])
            backtrack(i+1,curr)
            curr.pop()
        }
    }
    backtrack(0,[])

    return res

}
// 🔁 Try it
console.log(subsets([49,32,1]));
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

