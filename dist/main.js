var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
class Caracter {
    constructor(_a) {
        var { id = `${Date.now()}_${Math.random()}` } = _a, props = __rest(_a, ["id"]);
        this.id = id;
        this.name = props.name || '';
        this.level = props.level || 1;
        this.experience = props.experience || 0;
        this.money = props.money || 0;
        this.weight = props.weight || 0;
        this.initiative = props.initiative || 0;
        this.order = props.order || 'neutral';
        this.alignment = props.alignment || 'neutral';
        this.state = props.state || 'normal';
        this.life = props.life || 100;
        this.magic = props.magic || 100;
        this.stamina = props.stamina || 100;
        this.currentLife = props.currentLife || 100;
        this.currentMagic = props.currentMagic || 100;
        this.currentStamina = props.currentStamina || 100;
        this.strength = props.strength || 0;
        this.intelligence = props.intelligence || 0;
        this.dexterity = props.dexterity || 0;
        this.attack = props.attack || 0;
        this.defense = props.defense || 0;
        this.magicAttack = props.magicAttack || 0;
        this.magicDefense = props.magicDefense || 0;
        this.head = props.head || null;
        this.chest = props.chest || null;
        this.arms = props.arms || null;
        this.legs = props.legs || null;
        this.feet = props.feet || null;
        this.leftArm = props.leftArm || null;
        this.rightArm = props.rightArm || null;
        this.equipments = props.equipments || [];
        this.spells = props.spells || [];
        this.weaponMoves = props.weaponMoves || [];
        this.fightingMoves = props.fightingMoves || [];
        this.items = props.items || [];
    }
    get id() {
        return this.id;
    }
    set id(id) {
        this.id = id;
    }
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
    get level() {
        return this.level;
    }
    set level(level) {
        this.level = level;
    }
    get experience() {
        return this.experience;
    }
    set experience(experience) {
        this.experience = experience;
    }
    get money() {
        return this.money;
    }
    set money(money) {
        this.money = money;
    }
    get weight() {
        return this.weight;
    }
    set weight(weight) {
        this.weight = weight;
    }
    get initiative() {
        return this.initiative;
    }
    set initiative(initiative) {
        this.initiative = initiative;
    }
    get order() {
        return this.order;
    }
    set order(order) {
        this.order = order;
    }
    get alignment() {
        return this.alignment;
    }
    set alignment(alignment) {
        this.alignment = alignment;
    }
    get state() {
        return this.state;
    }
    set state(state) {
        this.state = state;
    }
    get life() {
        return this.life;
    }
    set life(life) {
        this.life = life;
    }
    get magic() {
        return this.magic;
    }
    set magic(magic) {
        this.magic = magic;
    }
    get stamina() {
        return this.stamina;
    }
    set stamina(stamina) {
        this.stamina = stamina;
    }
    get currentLife() {
        return this.currentLife;
    }
    set currentLife(currentLife) {
        this.currentLife = currentLife;
    }
    get currentMagic() {
        return this.currentMagic;
    }
    set currentMagic(currentMagic) {
        this.currentMagic = currentMagic;
    }
    get currentStamina() {
        return this.currentStamina;
    }
    set currentStamina(currentStamina) {
        this.currentStamina = currentStamina;
    }
    get strength() {
        return this.strength;
    }
    set strength(strength) {
        this.strength = strength;
    }
    get intelligence() {
        return this.intelligence;
    }
    set intelligence(intelligence) {
        this.intelligence = intelligence;
    }
    get dexterity() {
        return this.dexterity;
    }
    set dexterity(dexterity) {
        this.dexterity = dexterity;
    }
    get attack() {
        return this.attack;
    }
    set attack(attack) {
        this.attack = attack;
    }
    get defense() {
        return this.defense;
    }
    set defense(defense) {
        this.defense = defense;
    }
    get magicAttack() {
        return this.magicAttack;
    }
    set magicAttack(magicAttack) {
        this.magicAttack = magicAttack;
    }
    get magicDefense() {
        return this.magicDefense;
    }
    set magicDefense(magicDefense) {
        this.magicDefense = magicDefense;
    }
    get head() {
        return this.head;
    }
    set head(head) {
        this.head = head;
    }
    get chest() {
        return this.chest;
    }
    set chest(chest) {
        this.chest = chest;
    }
    get arms() {
        return this.arms;
    }
    set arms(arms) {
        this.arms = arms;
    }
    get legs() {
        return this.legs;
    }
    set legs(legs) {
        this.legs = legs;
    }
    get feet() {
        return this.feet;
    }
    set feet(feet) {
        this.feet = feet;
    }
    get leftArm() {
        return this.leftArm;
    }
    set leftArm(leftArm) {
        this.leftArm = leftArm;
    }
    get rightArm() {
        return this.rightArm;
    }
    set rightArm(rightArm) {
        this.rightArm = rightArm;
    }
    get equipments() {
        return this.equipments;
    }
    set equipments(equipments) {
        this.equipments = equipments;
    }
    get spells() {
        return this.spells;
    }
    set spells(spells) {
        this.spells = spells;
    }
    get weaponMoves() {
        return this.weaponMoves;
    }
    set weaponMoves(weaponMoves) {
        this.weaponMoves = weaponMoves;
    }
    get fightingMoves() {
        return this.fightingMoves;
    }
    set fightingMoves(fightingMoves) {
        this.fightingMoves = fightingMoves;
    }
    get items() {
        return this.items;
    }
    set items(items) {
        this.items = items;
    }
}
class Weapon {
    constructor() { }
    get id() {
        return this.id;
    }
    set id(id) {
        this.id = id;
    }
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
    get level() {
        return this.level;
    }
    set level(level) {
        this.level = level;
    }
    get type() {
        return this.type;
    }
    set type(type) {
        this.type = type;
    }
    get element() {
        return this.element;
    }
    set element(element) {
        this.element = element;
    }
    get bodyPart() {
        return this.bodyPart;
    }
    set bodyPart(bodyPart) {
        this.bodyPart = bodyPart;
    }
    get attack() {
        return this.attack;
    }
    set attack(attack) {
        this.attack = attack;
    }
    get magicAttack() {
        return this.magicAttack;
    }
    set magicAttack(magicAttack) {
        this.magicAttack = magicAttack;
    }
    get weight() {
        return this.weight;
    }
    set weight(weight) {
        this.weight = weight;
    }
    get durability() {
        return this.durability;
    }
    set durability(durability) {
        this.durability = durability;
    }
    get price() {
        return this.price;
    }
    set price(price) {
        this.price = price;
    }
}
export {};
