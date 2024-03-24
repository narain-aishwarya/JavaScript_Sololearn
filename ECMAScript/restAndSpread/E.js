const obj1 = {h: 'hello', i: 52}
const obj2 = {h: 'bye', l: 44}

const cloneObj = {...obj1}
const mergObj = {...obj1, ...obj2}

console.log(mergObj)
console.log(cloneObj)