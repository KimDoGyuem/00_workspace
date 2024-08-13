var btn;
var popup_screen;

window.onload = function () {
    btn = document.getElementById("btn");
    popup_screen = document.getElementById("popup");

    btn.addEventListener("click", pop);
}

function pop() {
    popup_screen.style.display = "none";
}