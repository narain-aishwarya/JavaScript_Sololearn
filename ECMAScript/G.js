//Object 

var tree = {
    height: 10,
    color: "green",

    grow(){
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height);