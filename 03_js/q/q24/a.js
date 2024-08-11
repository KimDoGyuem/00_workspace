var i = Math.floor(Math.random() * 10) + 1;
for (var j = 1; j <= 10; j++) {
    if (i == j) {
        continue;
    }
    document.write(j);
}
document.write("<br>");
document.write(i);