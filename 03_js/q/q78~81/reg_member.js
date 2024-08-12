var ipid;
var ippw;
var ipre_pw;
var ipname;
var ipemail;
var ipbirth_y;
var ipbirth_m;
var ipbirth_d;
var ipgender;
var iptel_1;
var iptel_2;
var iptel_3;

var id;
var pw;
var re_pw;
var username;
var email;
var birth_y;
var birth_m;
var birth_d;
var gender;
var tel_1;
var tel_2;
var tel_3;

window.onload = function(){
    ipid = document.getElementById("id");
    ippw = document.getElementById("pw");
    ipre_pw = document.getElementById("re_pw");
    ipname = document.getElementById("name");
    ipemail = document.getElementById("email");
    ipbirth_y = document.getElementById("birth_y");
    ipbirth_m = document.getElementById("birth_m");
    ipbirth_d = document.getElementById("birth_d");
    ipgender = document.getElementsByName("gender");
    iptel_1 = document.getElementById("tel_1");
    iptel_2 = document.getElementById("tel_2");
    iptel_3 = document.getElementById("tel_3");
}

function check(){
    id = ipid.value;
    pw = ippw.value;
    re_pw = ipre_pw.value;
    username = ipname.value;
    email = ipemail.value;
    birth_y = ipbirth_y.value;
    birth_m = ipbirth_m.value;
    birth_d = ipbirth_d.value;
    tel_1 = iptel_1.value;
    tel_2 = iptel_2.value;
    tel_3 = iptel_3.value;

    for(var i=0; i<ipgender.length; i++){
        // ipgender[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if(ipgender[i].checked == true){ 
            gender = ipgender[i].value; // 해당 라디오 버튼의 값을 변수에 저장
        }
    }

    var userInfo = 
    "id: "+id+"\n"
    +"pw: "+pw+"\n"
    +"re_pw: "+re_pw+"\n"
    +"userName: "+username+"\n"
    +"email: "+email+"\n"
    +"birth_y: "+birth_y+"\n"
    +"birth_m: "+birth_m+"\n"
    +"birth_d: "+birth_d+"\n"
    +"tel_1: "+tel_1+"\n"
    +"tel_2: "+tel_2+"\n"
    +"tel_3: "+tel_3+"\n"
    +"gender: "+gender ;

    alert(userInfo);

    if(checkId()&&checkpw()&&checkre_pw()&&checkEqualPwAndRPw()&&checkUserName()&&checkEmail()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}

function checkId(){
    if(id.length>=6 && id.length<=12){
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}
function checkpw(){
    if(pw.length>=6 && pw.length<=12){
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function checkre_pw(){
    if(re_pw.length>=6 && re_pw.length<=12){
        console.log("ok re_pw");
        return true;
    } else {
        console.log("no re_pw");
        return false;
    }
}
function checkEqualPwAndRPw(){
    if(pw == re_pw){
        console.log("ok pw 와 re_pw 같음");
        return true;
    } else {
        console.log("no pw 와 re_pw 다름");
        return false;
    }
}
function checkUserName(){
    if(UserName.length>=2 && UserName.length<=5){
        console.log("ok UserName");
        return true;
    } else {
        console.log("no UserName");
        return false;
    }
}
function checkEmail(){
    if(email.length>=10 && email.length<=20){
        console.log("ok email");
        return true;
    } else {
        console.log("no email");
        return false;
    }
}