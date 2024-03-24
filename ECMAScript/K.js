let person ={
    name: "Maddy",
    age: 22
}

let newPerson = person;
newPerson.name = "Cassie";

console.log(person.name);
console.log(newPerson.name);

//to avoid this mutation of object we will use assign() fuction