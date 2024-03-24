//CREATINg new object
function person(name, age , favColor){
    this.name = name;
    this.age = age;
    this.favColor = favColor;

}

var p1 = new person("Fia", 25 )
var p2 = new person("Karama", 14)

console.log(p1.age)
console.log(p2.name)