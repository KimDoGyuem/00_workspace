function Monster(name, hp, str){
    this.name = name;
    this.maxhp = hp;
    this.curhp = hp;
    this.str = str;
    this.exp = 100;
    this.money = 1000;
    this.info = function(){
        dw("[" + this.name + "] | (HP:" + this.curhp + "/" + this.maxhp + ")");
    }
}