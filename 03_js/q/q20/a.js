for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        document.write("★");
    }
    for (var k = 0; k < 10 - i; k++) {
        document.write("☆");
    }
    document.write("<br>");
}