let person = {
    name: "Maddy",
    age: 22
}

let newPerson = Object.assign({}, person);
newPerson.name = "Cassie";

console.log(person.name)
console.log(newPerson.name)

//Object.assign() create a new object.