//methods: 
//Methods are functions that are stored as object properties.
//methodName = function() { code lines }
//objectName.methodName()

function person(name , age){
    this.name = name;
    this.age = age;
    this.changeName = function (name){
        this.name = name;
    };
};

var p = new person ("David ", 21);
p.changeName("John")

console.log(p.name);

