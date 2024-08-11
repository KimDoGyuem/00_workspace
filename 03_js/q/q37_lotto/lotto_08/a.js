var p = [0,0,0,0,0,0];
p[0] = 1;
p[1] = 3;
p[2] = 5;
p[3] = 7;
p[4] = 9;
p[5] = 10;

var r = [0,0,0,0,0,0];
r[0] = Math.floor(Math.random()*45+1);

while(true){
    r[1] = Math.floor(Math.random()*45+1);
    if(r[1] != r[0]){
       break;
    }
}
while(true){
    r[2] = Math.floor(Math.random()*45+1);
    if(r[2] != r[0] && r[2] != r[1]){
       break;
    }
}
while(true){
    r[3] = Math.floor(Math.random()*45+1);
    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
       break;
    }
}
while(true){
    r[4] = Math.floor(Math.random()*45+1);
    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
       break;
    }
}
while(true){
    r[5] = Math.floor(Math.random()*45+1);
    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]){
       break;
    }
}


dw(r[0]);
br();
dw(r[1]);
br();
dw(r[2]);
br();
dw(r[3]);
br();
dw(r[4]);
br();
dw(r[5]);
br();

var win = 0;
if(p[0] == r[0] || p[0] == r[1] || p[0] == r[2] || p[0] == r[3] || p[0] == r[4] || p[0] == r[5]){
    win += +1;
}
if(p[1] == r[0] || p[1] == r[1] || p[1] == r[2] || p[1] == r[3] || p[1] == r[4] || p[1] == r[5]){
    win += +1;
}
if(p[2] == r[0] || p[2] == r[1] || p[2] == r[2] || p[2] == r[3] || p[2] == r[4] || p[2] == r[5]){
    win += +1;
}
if(p[3] == r[0] || p[3] == r[1] || p[3] == r[2] || p[3] == r[3] || p[3] == r[4] || p[3] == r[5]){
    win += +1;
}
if(p[4] == r[0] || p[4] == r[1] || p[4] == r[2] || p[4] == r[3] || p[4] == r[4] || p[4] == r[5]){
    win += +1;
}
if(p[5] == r[0] || p[5] == r[1] || p[5] == r[2] || p[5] == r[3] || p[5] == r[4] || p[5] == r[5]){
    win += +1;
}

dw("총" + win +"개 맞았습니다");
