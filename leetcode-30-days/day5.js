/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    console.log(arr, fn)
    return arr.filter((v, i)=>fn(v, i))
};

const f =  (v, i)=>v%2===0

filter([1,2,3,4,5],  f)