function person (name , age){
    this.name = name;
    this.age = age;

    this.yearofBirth = bornYear;
}

function bornYear(){
    return 2023 - this.age;
}

var p = new person("Altas", 25);
console.log(p.bornYear)
console.log(p.yearofBirth())