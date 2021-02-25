function filterRangeInPlace(arr,a,b){
    return arr.filter(item=>a<=item<=b)
}
let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr,1,4));