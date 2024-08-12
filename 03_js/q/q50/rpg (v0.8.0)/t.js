var user = new Character("모험가", 500, 50);
var slime = new Monster("슬라임", 100, 10);

function displayinfo() {
    hr();
    user.info();
    br();
    slime.info();
    hr();
}

displayinfo();

dw("전투시작");
hr();

var loop = true;
while (loop) {
    loop = battlecycle();
}

function battlecycle() {
    var user_damage = random(user.str);
    var slime_damage = random(slime.str);
    user.curhp = user.curhp - slime_damage;
    slime.curhp = slime.curhp - user_damage;
    dw(user.name + "는(은) " + slime.name + "에게 " + user_damage + "의 데미지를 입혔다.")
    br();
    dw(slime.name + "는(은) " + user.name + "에게 " + slime_damage + "의 데미지를 입혔다.")
    if(user.curhp <= 0 || slime.curhp <= 0){
        endBattle();
        displayinfo();
        return false;
    }else{
        displayinfo();
        return true;
    }
}

function endBattle(){
    hr();
    dw("전투종료");
    br();
    user.exp = user.exp + slime.exp;
    user.money = user.money + slime.money;
    dw(slime.name + "에게 " + slime.exp + "의 경험치를 얻었습니다. +" + slime.money +"골드")
}
