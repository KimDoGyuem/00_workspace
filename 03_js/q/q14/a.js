var i = prompt("숫자를 입력하세요");
document.write(i+"를 입력하였습니다"+"<br>");
switch(i){
    case "1":
        document.write("1 입니다");
    break;
    case "2":
        document.write("2 입니다");
    break;
    case "3":
        document.write("3 입니다");
    break;
    default:
        document.write("1,2,3이 아닙니다");
}