function show(){
    alert("Hi there ^V^");
}

var v = document.getElementById("demo");
v.onclick = function(){
    document.body.innerHTML = Date();
}

window.onload = function(){
    var add = 2 + 2;
    alert(add)
}

window.onload = function(){
    var btn = document.getElementById("hello");
    btn.addEventListener("mouseover", myFunction);

    function myFunction() {
        alert("Hello Asshole");
    btn.removeEventListener("mouseover", myFunction);
    }
};