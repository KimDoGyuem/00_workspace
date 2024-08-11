function Character(name, hp, attack) {
    this.name = name;
    this.maxhp = hp;
    this.curhp = hp;
    this.attack = attack;
    this.info = function () {
        dw("[" + this.name + "]|HP(" + this.curhp + "/" + this.maxhp + ")|");
    }
}