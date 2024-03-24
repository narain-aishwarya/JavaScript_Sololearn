//Rest parameter :
/*The ...nums parameter is called a rest parameter. 
It takes all the "extra" arguments passed to the function.
The three dots (...) are called the Spread operator. */
function containsAll(arr, ...nums){
    for(let num of nums){
        if(arr.indexOf(num) === -1){
            return false;
        }
    }
    return true; 
}
let x = [2,4,6,9]

console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

//the rest parameter will never be undefined.