//class methods:
class Rectangle{
    constructor(height, width){
        this.height =height;
        this.width = width;
    }

    get area(){
        return this.calcArea();
    }
    
    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(5,5);
console.log(square.area);

//In the code above, area is a getter, calcArea is a method.