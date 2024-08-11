var p1 = 1;
var p2 = 3;
var p3 = 5;
var p4 = 7;
var p5 = 9;
var p6 = 10;

var r1 = Math.floor(Math.random()*45+1);
// var r2 = Math.floor(Math.random()*45+1);
// var r3 = Math.floor(Math.random()*45+1);
var r4 = Math.floor(Math.random()*45+1);
var r5 = Math.floor(Math.random()*45+1);
var r6 = Math.floor(Math.random()*45+1);

while(true){
    var r2 = Math.floor(Math.random()*45+1);
    var r3 = Math.floor(Math.random()*45+1);
    if(r2 != r1){
        if(r3 != r1){
            if(r3 != r2){
                break;
            }
        }
    }
}

dw(r1);
br();
dw(r2);
br();
dw(r3);
br();
dw(r4);
br();
dw(r5);
br();
dw(r6);
br();

var win = 0;
if(p1 == r1 || p1 == r2 || p1 == r3 || p1 == r4 || p1 == r5 || p1 == r6){
    win += +1;
}
if(p2 == r1 || p2 == r2 || p2 == r3 || p2 == r4 || p2 == r5 || p2 == r6){
    win += +1;
}
if(p3 == r1 || p3 == r2 || p3 == r3 || p3 == r4 || p3 == r5 || p3 == r6){
    win += +1;
}
if(p4 == r1 || p4 == r2 || p4 == r3 || p4 == r4 || p4 == r5 || p4 == r6){
    win += +1;
}
if(p5 == r1 || p5 == r2 || p5 == r3 || p5 == r4 || p5 == r5 || p5 == r6){
    win += +1;
}
if(p6 == r1 || p6 == r2 || p6 == r3 || p6 == r4 || p6 == r5 || p6 == r6){
    win += +1;
}

dw("총" + win +"개 맞았습니다");
