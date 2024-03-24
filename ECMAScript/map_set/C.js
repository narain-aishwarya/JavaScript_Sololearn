let map = new Map([['12', 'v1'], ['13', 'v2']])

map.set('14','v3')

for(let kv of map.values()){
    //console.log(kv[0] + ' : ' + kv)
    console.log(kv)
}