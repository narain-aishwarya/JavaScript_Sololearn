let set = new Set([4,5,8,1,12,750])

set.delete(750)

for(let s of set.values()){
    console.log(s)
}