let person = {
    name: "Maddy",
    age: 22
}

let newPerson = Object.assign({}, person, {name:"Cassie"});

console.log(person.name)
console.log(newPerson.name)