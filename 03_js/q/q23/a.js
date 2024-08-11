var i = Math.floor(Math.random() * 10) + 1;
for(var j = 0; j < 10; j++){
    var k = j + 1;
    if(i == j){
        break;
    }
    document.write(k);
}

document.write("<br>"+"i의 값은"+i+"<br>");
document.write("j의 값은"+j+"<br>");
document.write("k의 값은"+k);

