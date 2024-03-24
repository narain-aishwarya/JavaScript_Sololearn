function person(name , age){
    this.name = name;
    this.age = age;
}

var Heera = new person("Heera", 12)
var Nagisa = new person("Nagisa", 19)

console.log(Heera.name)
console.log(Heera.age)
console.log(Nagisa.name)
console.log(Nagisa.age)