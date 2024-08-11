var user = new Character("모험가", 500, 50);
var slime = new Monster("슬라임", 100, 10);

displayinfo();

dw("전투가 시작되었습니다!");
hr();

function battlecycle() {
    var user_damage = random(user.attack);
    var slime_damage = random(slime.attack);
    
    user.curhp = user.curhp - slime_damage;
    dw(user.name + "는(은) " + slime.name + "에게 " + user_damage + " 피해를 입혔습니다.")
    br();
    slime.curhp = slime.curhp - user_damage;
    dw(slime.name + "는(은) " + user.name + "에게 " + slime_damage + " 피해를 입혔습니다.")


    displayinfo();

    if(user.curhp <= 0 || slime.curhp <= 0){
        return false;
    }else{
        return true;
    }
}

var loop = true;
while (loop) {
    loop = battlecycle();
}

if(user.curhp <= 0){
    dw("모험가의 HP가 0 이하가 되어 게임오버 됩니다.");
}else if(slime.curhp <= 0){
    dw("슬라임을 물리쳤습니다.");
}