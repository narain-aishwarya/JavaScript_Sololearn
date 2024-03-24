function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = print;
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);

function print(){
    return this.name +": "+ this.number;
}

a.print();
b.print();