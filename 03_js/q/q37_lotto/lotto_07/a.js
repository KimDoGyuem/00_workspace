var p = [0,0,0,0,0,0];
p[0] = 1;
p[1] = 3;
p[2] = 5;
p[3] = 7;
p[4] = 9;
p[5] = 10;

var r = [0,0,0,0,0,0];
r[0] = Math.floor(Math.random()*45+1);
r[1] = Math.floor(Math.random()*45+1);
r[2] = Math.floor(Math.random()*45+1);
r[3] = Math.floor(Math.random()*45+1);
r[4] = Math.floor(Math.random()*45+1);
r[5] = Math.floor(Math.random()*45+1);

while(true){
    var r2 = Math.floor(Math.random()*45+1);
    if(r2 != r1){
       break;
    }
}
while(true){
    var r3 = Math.floor(Math.random()*45+1);
    if(r3 != r1 && r3 != r2){
       break;
    }
}
while(true){
    var r4 = Math.floor(Math.random()*45+1);
    if(r4 != r1 && r4 != r2 && r4 != r3){
       break;
    }
}
while(true){
    var r5 = Math.floor(Math.random()*45+1);
    if(r5 != r1 && r5 != r2 && r5 != r3 && r5 != r4){
       break;
    }
}
while(true){
    var r6 = Math.floor(Math.random()*45+1);
    if(r6 != r1 && r6 != r2 && r6 != r3 && r6 != r4 && r6 != r5){
       break;
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
if(p[0] == r1 || p[0] == r2 || p[0] == r3 || p[0] == r4 || p[0] == r5 || p[0] == r6){
    win += +1;
}
if(p[1] == r1 || p[1] == r2 || p[1] == r3 || p[1] == r4 || p[1] == r5 || p[1] == r6){
    win += +1;
}
if(p[2] == r1 || p[2] == r2 || p[2] == r3 || p[2] == r4 || p[2] == r5 || p[2] == r6){
    win += +1;
}
if(p[3] == r1 || p[3] == r2 || p[3] == r3 || p[3] == r4 || p[3] == r5 || p[3] == r6){
    win += +1;
}
if(p[4] == r1 || p[4] == r2 || p[4] == r3 || p[4] == r4 || p[4] == r5 || p[4] == r6){
    win += +1;
}
if(p[5] == r1 || p[5] == r2 || p[5] == r3 || p[5] == r4 || p[5] == r5 || p[5] == r6){
    win += +1;
}

dw("총" + win +"개 맞았습니다");
