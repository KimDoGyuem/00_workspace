var user;
var comnum;
var com;
var res;
var textbox;
var textarea;
var text;
var user_img;
var com_img;

window.onload = function () {
    textbox = document.getElementById("text_box");
    textarea = document.getElementById("textarea");
    user_img = document.getElementById("user_img");
    com_img = document.getElementById("com_img");
}

function InputButtonBox() {
    user = textbox.value;
    if (user == "가위" || user == "바위" || user == "보") {
        logic();
    } else {
        alert("똑바로 입력해라!");
    }
}

function logic() {
    comnum = Math.floor(Math.random() * 3 + 1);
    switch (user) {
        case "가위":
            user_img.innerHTML = "<img src='sc.png'>"
            break;
        case "바위":
            user_img.innerHTML = "<img src='ro.png'>"
            break;
        case "보":
            user_img.innerHTML = "<img src='pa.png'>"
            break;
    }

    if (comnum == 1) {
        com = "가위";
        com_img.innerHTML = "<img src='c_sc.png'>"
    } else if (comnum == 2) {
        com = "바위";
        com_img.innerHTML = "<img src='c_ro.png'>"
    } else {
        com = "보";
        com_img.innerHTML = "<img src='c_pa.png'>"
    }

    switch (user) {
        case "가위":
            switch (com) {
                case "가위":
                    res = "비겼음"
                    break;
                case "바위":
                    res = "졌음"
                    break;
                case "보":
                    res = "이겼음"
                    break;
            }
            break;
        case "바위":
            switch (com) {
                case "가위":
                    res = "이겼음"
                    break;
                case "바위":
                    res = "비겼음"
                    break;
                case "보":
                    res = "졌음"
                    break;
            }
            break;
        case "보":
            switch (com) {
                case "가위":
                    res = "졌음"
                    break;
                case "바위":
                    res = "이겼음"
                    break;
                case "보":
                    res = "비겼음"
                    break;
            }
            break;
    }

    text = "유저:" + user + "\n" + "컴퓨터:" + com + "\n" + "결과:" + res
    textarea.value = text;
}