
const merger = (l:number[],r:number[]) => {
    let i = 0
    let j = 0
    let res:number[] = []
    while(i<l.length && j<r.length) {
        if(l[i]<r[j]) {
            res.push(l[i])
            i++
        }else{
            res.push(r[j])
            j++
        }
    }
     while (i < l.length) res.push(l[i++]);
     while (j < r.length) res.push(r[j++]);
    return res
}
const mergeSort = (arr:number[]) => {
    if (arr.length === 1) {
      return arr;
    }
    let mid = Math.floor((arr.length)/ 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merger(left,right)
}


console.log(mergeSort([3,4,1,4,6,3,9,7,8]))