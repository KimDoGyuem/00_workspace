var i;
var p;
var d;
var id;
var pw;

window.onload = function(){
    i = document.getElementById("id");
    p = document.getElementById("password");
    d = document.getElementById("login_box");
}

function login(){
    id = i.value;
    pw = p.value;

    if(id == "cat" && pw =="1234"){
        alert("로그인에 성공하였습니다");
        d.innerHTML = id + "회원님 반갑습니다"
    }else{
        alert("로그인에 실패하였습니다");
    }
}