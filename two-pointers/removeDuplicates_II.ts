




const removeDuplicates_II = (array:number[]) => {

    let l = 2

    for (let r = 2; r < array.length; r++) {
        if(array[r] !== array[l-2]) {
            array[l] = array[r]
            l++
        }
    }
    array.length = l
    return array
}

console.log(removeDuplicates_II([1,1,1,2,2,2,2,2,3,3,3,4,5,5]));
