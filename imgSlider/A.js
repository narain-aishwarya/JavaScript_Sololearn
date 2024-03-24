var img = [
    "apple.jpg",
    "orange.jpg",
    "apple.jpg",
    "orange.jpg"
];

var num = 0

function next(){
    var slider = document.getElementById("slider");
    num++;
    if (num >= img.length){
        num = 0;
    }
    slider.src = img[num];
}

function pre(){
    var slider = document.getElementById("slider");
    num--;
    if(num < 0){
        num = img.length - 1;

    }
    slider.src = img[num];
}