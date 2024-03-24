let map = new Map([['12', 'v1'], ['13', 'v2']])

map.set('14','v3')

console.log(map.get('12'))
console.log(map.has('14'))

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);