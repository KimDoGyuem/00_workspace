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