function Character(name, hp, str){
    this.name = name;
    this.maxhp = hp;
    this.curhp = hp;
    this.str = str;
    this.exp = 0;
    this.money = 0;
    this.info = function(){
        dw("[" + this.name + "] | (HP:" + this.curhp + "/" + this.maxhp + ") | (exp:" + this.exp + "/300) | " + "소지골드:" + this.money);
    }
}