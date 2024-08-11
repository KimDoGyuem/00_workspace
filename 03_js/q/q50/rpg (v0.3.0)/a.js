function Character(name, hp, attack){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.info = function(){
		dw("[" + this.name + "] hp:" + this.hp + " / 공격력:" +this.attack);
	}
}

var orc = new Character("오크", 100, 10);
var user = new Character("모험가", 500, 50);

orc.info();
hr();
user.info();

hr();
dw("전투시작");
hr();

var orc_attack = random(orc.attack);
var user_attack = random(user.attack);

dw("모험가 데미지:" + user_attack);
hr();
dw("오크 데미지:" + orc_attack);
hr();

orc.hp = orc.hp - user_attack;
user.hp = user.hp - orc_attack;

orc.info();
hr();
user.info();