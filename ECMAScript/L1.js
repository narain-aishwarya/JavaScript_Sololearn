let a = () =>{
    return [1,3,2];
}

let [one, , two] = a();

console.log(one);
console.log(two);