class Animal {
    constructor(name){
        this.name = name;
    }
    speak (){
        console.log(this.name + ' makes a noise')
    }
}

class Dog extends Animal{
    speak(){
        console.log(this.name + ' barks');
    }
}

let animal = new Animal('Cat')
let dog = new Dog ('Buzoo');
dog.speak();

animal.speak();