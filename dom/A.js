var element = document.getElementById("demo");

element.innerHTML = "Hello World!";

var arr = document.getElementsByTagName("p");
for (var i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "Hi there";
}

var v = document.getElementById("new");

var a = v.childNodes;
for (var i = 0; i < a.length; i++) {
    a[i].innerHTML = "Languages";
}

var el = document.getElementById("My_img");
el.src = "apple.jpg";

//creating new paragraph
var p = document.createElement("p");
var node = document.createTextNode("some new text!!")
//adding text to the paragraph
p.appendChild(node);

var div = document.getElementById("marshal");
//adding paragraph to the div
div.appendChild(p);

//removing element
var parent = document.getElementsById("new");
var child = document.getElementById("p1");
parent.removeChild(child);

//repalce child

var r = document.createElement("p");
var node = document.createTextNode("this is new ");
r.appendChild(node);

var parent = document.getElementById("school");
var child = document.getElementById("p1");
parent.replaceChild(p, child);
