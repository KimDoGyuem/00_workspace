
var input_id;
var input_pw;
var divlt;

window.onload = function () { // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    divlt = document.getElementById("lt");
}

function login() {
    var id = input_id.value;
    var pw = input_pw.value;
    if (id == "cat" && pw == "1234") {
        alert("로그인 성공");
        divlt.innerHTML = id + "회원님 반갑습니다"
    } else {
        alert("로그인 실패");
    }
}
