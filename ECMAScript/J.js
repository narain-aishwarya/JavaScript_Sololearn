//new method : object.assign()

let person = {
    name : "Gojo",
    age: 25,
    sex: "male",

};

let student ={
    name: "Yuji",
    age: 19,
    year: 1
}

let newStudent = Object.assign({name: "Megumi"}, person, student);

console.log(newStudent.name);
console.log(newStudent.age);
console.log(newStudent.sex);
console.log(newStudent.year);