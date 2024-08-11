var a = Math.floor(Math.random() * 100) + 1;
document.write("값은" + a + "입니다" + "<br>")
for (var i = 1; i <= a; i = i + 1) {
    if (i == 7) {
        document.write("<img id='gcat' src='cat.png'>" + i + "<br>");
    }else {
        document.write("<img  src='cat.png'>" + i + "<br>");
    }
}

// var a=Math.floor(Math.random()*100)+1;
// for( var i=1;  i <= a;  i=i+1  ) {
    // if ( i == 7 ) { //황금고양이 만들기
        // document.write("<img id='gcat' src='cat.png' width='100px' height='100px'>");
        // document.write(i);
        // var gold_cat_img = document.getElementById("gcat");
        // gold_cat_img.style.borderColor = "yellow";
        // gold_cat_img.style.borderStyle = "solid";
        // gold_cat_img.style.borderWidth = "10px";
    // } else {
        // document.write("<img src='cat.png' width='100px' height='100px'>");
        // document.write(i);
    // }
// }

