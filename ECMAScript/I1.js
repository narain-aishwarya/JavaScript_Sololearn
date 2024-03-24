var a = 0;

var i ={
    ['foo' + ++a]: a,
    ['foo' + ++a]: a,
    ['foo' + ++a]: a
}
console.log(i.foo1)
console.log(i.foo2)
console.log(i.foo3)