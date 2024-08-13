var btn;
var btn1;
var popup_screen;
var popup_screen1;
var load = false;

window.onload = function () {
    btn = document.getElementById("btn");
    popup_screen = document.getElementById("popup");

    btn.addEventListener("click", pop);
}

function pop() {
    if (load == false) {
        popup_screen.style.width = "100px";
        popup_screen.style.height = "100px";
        popup_screen.style.background = "pink";
        popup_screen.style.transitionDuration = "1s";
        load = true;
    }else{
        popup_screen.style.width = "200px";
        popup_screen.style.height = "200px";
        popup_screen.style.background = "red";
        popup_screen.style.transitionDuration = "1s";
        load = false;
    }
}

function pop1(){
    popup_screen1 = document.getElementById("popup1");

    if (load == false) {
        popup_screen1.style.width = "100px";
        popup_screen1.style.height = "100px";
        popup_screen1.style.background = "pink";
        popup_screen1.style.transitionDuration = "1s";
        load = true;
    }else{
        popup_screen1.style.width = "200px";
        popup_screen1.style.height = "200px";
        popup_screen1.style.background = "red";
        popup_screen1.style.transitionDuration = "1s";
        load = false;
}
}