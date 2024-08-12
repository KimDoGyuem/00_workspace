
var input_id;
var input_pw;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");

}

function login(){

    alert("id:"+input_id.value+" pw:"+input_pw.value);
	
}