import {
  IArmor,
  ICaracter,
  IEquipment,
  IFightingMove,
  IItem,
  IShield,
  ISpell,
  IWeapon,
  IWeaponMove,
  TAlignment,
  TArmorBodyPart,
  TEquipmentAttribute,
  TEquipmentResistance,
  TEquipmentType,
  TFightingMoveElement,
  TItemAttribute,
  TItemEffect,
  TItemType,
  TOrder,
  TSpellElement,
  TSpellType,
  TState,
  TWeaponBodyPart,
  TWeaponElement,
  TWeaponType,
} from './types';

export class Caracter implements ICaracter {
  constructor({ id = Date.now().toString(16), ...props }: Partial<ICaracter>) {
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
    this.head = props.head || null!;
    this.chest = props.chest || null!;
    this.arms = props.arms || null!;
    this.legs = props.legs || null!;
    this.feet = props.feet || null!;
    this.leftArm = props.leftArm || null!;
    this.rightArm = props.rightArm || null!;
    this.equipments = props.equipments || [];

    this.spells = props.spells || [];
    this.weaponMoves = props.weaponMoves || [];
    this.fightingMoves = props.fightingMoves || [];
    this.items = props.items || [];
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get experience(): number {
    return this.experience;
  }
  set experience(experience: number) {
    this.experience = experience;
  }
  get money(): number {
    return this.money;
  }
  set money(money: number) {
    this.money = money;
  }
  get weight(): number {
    return this.weight;
  }
  set weight(weight: number) {
    this.weight = weight;
  }
  get initiative(): number {
    return this.initiative;
  }
  set initiative(initiative: number) {
    this.initiative = initiative;
  }
  get order(): TOrder {
    return this.order;
  }
  set order(order: TOrder) {
    this.order = order;
  }
  get alignment(): TAlignment {
    return this.alignment;
  }
  set alignment(alignment: TAlignment) {
    this.alignment = alignment;
  }
  get state(): TState {
    return this.state;
  }
  set state(state: TState) {
    this.state = state;
  }
  get life(): number {
    return this.life;
  }
  set life(life: number) {
    this.life = life;
  }
  get magic(): number {
    return this.magic;
  }
  set magic(magic: number) {
    this.magic = magic;
  }
  get stamina(): number {
    return this.stamina;
  }
  set stamina(stamina: number) {
    this.stamina = stamina;
  }
  get currentLife(): number {
    return this.currentLife;
  }
  set currentLife(currentLife: number) {
    this.currentLife = currentLife;
  }
  get currentMagic(): number {
    return this.currentMagic;
  }
  set currentMagic(currentMagic: number) {
    this.currentMagic = currentMagic;
  }
  get currentStamina(): number {
    return this.currentStamina;
  }
  set currentStamina(currentStamina: number) {
    this.currentStamina = currentStamina;
  }
  get strength(): number {
    return this.strength;
  }
  set strength(strength: number) {
    this.strength = strength;
  }
  get intelligence(): number {
    return this.intelligence;
  }
  set intelligence(intelligence: number) {
    this.intelligence = intelligence;
  }
  get dexterity(): number {
    return this.dexterity;
  }
  set dexterity(dexterity: number) {
    this.dexterity = dexterity;
  }
  get attack(): number {
    return this.attack;
  }
  set attack(attack: number) {
    this.attack = attack;
  }
  get defense(): number {
    return this.defense;
  }
  set defense(defense: number) {
    this.defense = defense;
  }
  get magicAttack(): number {
    return this.magicAttack;
  }
  set magicAttack(magicAttack: number) {
    this.magicAttack = magicAttack;
  }
  get magicDefense(): number {
    return this.magicDefense;
  }
  set magicDefense(magicDefense: number) {
    this.magicDefense = magicDefense;
  }
  get head(): IArmor {
    return this.head;
  }
  set head(head: IArmor) {
    this.head = head;
  }
  get chest(): IArmor {
    return this.chest;
  }
  set chest(chest: IArmor) {
    this.chest = chest;
  }
  get arms(): IArmor {
    return this.arms;
  }
  set arms(arms: IArmor) {
    this.arms = arms;
  }
  get legs(): IArmor {
    return this.legs;
  }
  set legs(legs: IArmor) {
    this.legs = legs;
  }
  get feet(): IArmor {
    return this.feet;
  }
  set feet(feet: IArmor) {
    this.feet = feet;
  }
  get leftArm(): IWeapon | IShield {
    return this.leftArm;
  }
  set leftArm(leftArm: IWeapon | IShield) {
    this.leftArm = leftArm;
  }
  get rightArm(): IWeapon | IShield {
    return this.rightArm;
  }
  set rightArm(rightArm: IWeapon | IShield) {
    this.rightArm = rightArm;
  }
  get equipments(): IEquipment[] {
    return this.equipments;
  }
  set equipments(equipments: IEquipment[]) {
    this.equipments = equipments;
  }
  get spells(): ISpell[] {
    return this.spells;
  }
  set spells(spells: ISpell[]) {
    this.spells = spells;
  }
  get weaponMoves(): IWeaponMove[] {
    return this.weaponMoves;
  }
  set weaponMoves(weaponMoves: IWeaponMove[]) {
    this.weaponMoves = weaponMoves;
  }
  get fightingMoves(): IFightingMove[] {
    return this.fightingMoves;
  }
  set fightingMoves(fightingMoves: IFightingMove[]) {
    this.fightingMoves = fightingMoves;
  }
  get items(): IItem[] {
    return this.items;
  }
  set items(items: IItem[]) {
    this.items = items;
  }
}

export class Weapon implements IWeapon {
  constructor({ id = Date.now().toString(16), ...props }: Partial<IWeapon>) {
    this.id = id;
    this.name = props.name || '';
    this.level = props.level || 1;
    this.type = props.type || 'sword';
    this.element = props.element || 'none';
    this.bodyPart = props.bodyPart || 'bothArms';
    this.attack = props.attack || 0;
    this.magicAttack = props.magicAttack || 0;
    this.weight = props.weight || 0;
    this.durability = props.durability || 0;
    this.price = props.price || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get type(): TWeaponType {
    return this.type;
  }
  set type(type: TWeaponType) {
    this.type = type;
  }
  get element(): TWeaponElement {
    return this.element;
  }
  set element(element: TWeaponElement) {
    this.element = element;
  }
  get bodyPart(): TWeaponBodyPart {
    return this.bodyPart;
  }
  set bodyPart(bodyPart: TWeaponBodyPart) {
    this.bodyPart = bodyPart;
  }
  get attack(): number {
    return this.attack;
  }
  set attack(attack: number) {
    this.attack = attack;
  }
  get magicAttack(): number {
    return this.magicAttack;
  }
  set magicAttack(magicAttack: number) {
    this.magicAttack = magicAttack;
  }
  get weight(): number {
    return this.weight;
  }
  set weight(weight: number) {
    this.weight = weight;
  }
  get durability(): number {
    return this.durability;
  }
  set durability(durability: number) {
    this.durability = durability;
  }
  get price(): number {
    return this.price;
  }
  set price(price: number) {
    this.price = price;
  }
}

export class Shield implements IShield {
  constructor({ id = Date.now().toString(16), ...props }: Partial<IShield>) {
    this.id = id;
    this.name = props.name || '';
    this.level = props.level || 1;
    this.defense = props.defense || 0;
    this.magicDefense = props.magicDefense || 0;
    this.weight = props.weight || 0;
    this.durability = props.durability || 0;
    this.price = props.price || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get defense(): number {
    return this.defense;
  }
  set defense(defense: number) {
    this.defense = defense;
  }
  get magicDefense(): number {
    return this.magicDefense;
  }
  set magicDefense(magicDefense: number) {
    this.magicDefense = magicDefense;
  }
  get weight(): number {
    return this.weight;
  }
  set weight(weight: number) {
    this.weight = weight;
  }
  get durability(): number {
    return this.durability;
  }
  set durability(durability: number) {
    this.durability = durability;
  }
  get price(): number {
    return this.price;
  }
  set price(price: number) {
    this.price = price;
  }
}

export class Armor implements IArmor {
  constructor({ id = Date.now().toString(16), ...props }: Partial<IArmor>) {
    this.id = id;
    this.name = props.name || '';
    this.level = props.level || 1;
    this.bodyPart = props.bodyPart || 'head';
    this.defense = props.defense || 0;
    this.magicDefense = props.magicDefense || 0;
    this.weight = props.weight || 0;
    this.durability = props.durability || 0;
    this.price = props.price || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get bodyPart(): TArmorBodyPart {
    return this.bodyPart;
  }
  set bodyPart(bodyPart: TArmorBodyPart) {
    this.bodyPart = bodyPart;
  }
  get defense(): number {
    return this.defense;
  }
  set defense(defense: number) {
    this.defense = defense;
  }
  get magicDefense(): number {
    return this.magicDefense;
  }
  set magicDefense(magicDefense: number) {
    this.magicDefense = magicDefense;
  }
  get weight(): number {
    return this.weight;
  }
  set weight(weight: number) {
    this.weight = weight;
  }
  get durability(): number {
    return this.durability;
  }
  set durability(durability: number) {
    this.durability = durability;
  }
  get price(): number {
    return this.price;
  }
  set price(price: number) {
    this.price = price;
  }
}

export class Item implements IItem {
  constructor({ id = Date.now().toString(16), ...props }: Partial<IItem>) {
    this.id = id;
    this.name = props.name || '';
    this.type = props.type || 'consumable';
    this.effect = props.effect || 'heal';
    this.attribute = props.attribute || 'life';
    this.value = props.value || 0;
    this.price = props.price || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get type(): TItemType {
    return this.type;
  }
  set type(type: TItemType) {
    this.type = type;
  }
  get effect(): TItemEffect {
    return this.effect;
  }
  set effect(effect: TItemEffect) {
    this.effect = effect;
  }
  get attribute(): TItemAttribute {
    return this.attribute;
  }
  set attribute(attribute: TItemAttribute) {
    this.attribute = attribute;
  }
  get value(): number {
    return this.value;
  }
  set value(value: number) {
    this.value = value;
  }
  get weight(): number {
    return this.weight;
  }
  set weight(weight: number) {
    this.weight = weight;
  }
  get price(): number {
    return this.price;
  }
  set price(price: number) {
    this.price = price;
  }
}

export class Equipment implements IEquipment {
  constructor({ id = Date.now().toString(16), ...props }: Partial<IEquipment>) {
    this.id = id;
    this.name = props.name || '';
    this.level = props.level || 1;
    this.type = props.type || 'ring';
    this.attribute = props.attribute || 'none';
    this.resistance = props.resistance || 'physical';
    this.value = props.value || 0;
    this.weight = props.weight || 0;
    this.price = props.price || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get type(): TEquipmentType {
    return this.type;
  }
  set type(type: TEquipmentType) {
    this.type = type;
  }
  get attribute(): TEquipmentAttribute {
    return this.attribute;
  }
  set attribute(attribute: TEquipmentAttribute) {
    this.attribute = attribute;
  }
  get resistance(): TEquipmentResistance {
    return this.resistance;
  }
  set resistance(resistance: TEquipmentResistance) {
    this.resistance = resistance;
  }
  get value(): number {
    return this.value;
  }
  set value(value: number) {
    this.value = value;
  }
  get weight(): number {
    return this.weight;
  }
  set weight(weight: number) {
    this.weight = weight;
  }
  get price(): number {
    return this.price;
  }
  set price(price: number) {
    this.price = price;
  }
}

export class Spell implements ISpell {
  constructor({ id = Date.now().toString(16), ...props }: Partial<ISpell>) {
    this.id = id;
    this.name = props.name || '';
    this.level = props.level || 1;
    this.type = props.type || 'attack';
    this.element = props.element || 'fire';
    this.expertise = props.expertise || 0;
    this.magicCost = props.magicCost || 0;
    this.timeToCast = props.timeToCast || 0;
    this.damage = props.damage || 0;
    this.price = props.price || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get type(): TSpellType {
    return this.type;
  }
  set type(type: TSpellType) {
    this.type = type;
  }
  get element(): TSpellElement {
    return this.element;
  }
  set element(element: TSpellElement) {
    this.element = element;
  }
  get expertise(): number {
    return this.expertise;
  }
  set expertise(expertise: number) {
    this.expertise = expertise;
  }
  get magicCost(): number {
    return this.magicCost;
  }
  set magicCost(magicCost: number) {
    this.magicCost = magicCost;
  }
  get timeToCast(): number {
    return this.timeToCast;
  }
  set timeToCast(timeToCast: number) {
    this.timeToCast = timeToCast;
  }
  get damage(): number {
    return this.damage;
  }
  set damage(damage: number) {
    this.damage = damage;
  }
  get price(): number {
    return this.price;
  }
  set price(price: number) {
    this.price = price;
  }
}

export class WeaponMove implements IWeaponMove {
  constructor({
    id = Date.now().toString(16),
    ...props
  }: Partial<IWeaponMove>) {
    this.id = id;
    this.name = props.name || '';
    this.level = props.level || 1;
    this.type = props.type || 'attack';
    this.expertise = props.expertise || 0;
    this.damage = props.damage || 0;
    this.staminaCost = props.staminaCost || 0;
    this.timeToCast = props.timeToCast || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get type(): 'attack' | 'defense' {
    return this.type;
  }
  set type(type: 'attack' | 'defense') {
    this.type = type;
  }
  get expertise(): number {
    return this.expertise;
  }
  set expertise(expertise: number) {
    this.expertise = expertise;
  }
  get damage(): number {
    return this.damage;
  }
  set damage(damage: number) {
    this.damage = damage;
  }
  get staminaCost(): number {
    return this.staminaCost;
  }
  set staminaCost(staminaCost: number) {
    this.staminaCost = staminaCost;
  }
  get timeToCast(): number {
    return this.timeToCast;
  }
  set timeToCast(timeToCast: number) {
    this.timeToCast = timeToCast;
  }
}

export class FightingMove implements IFightingMove {
  constructor({
    id = Date.now().toString(16),
    ...props
  }: Partial<IFightingMove>) {
    this.id = id;
    this.name = props.name || '';
    this.level = props.level || 1;
    this.type = props.type || 'attack';
    this.element = props.element || 'physical';
    this.expertise = props.expertise || 0;
    this.damage = props.damage || 0;
    this.staminaCost = props.staminaCost || 0;
    this.timeToCast = props.timeToCast || 0;
  }
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get level(): number {
    return this.level;
  }
  set level(level: number) {
    this.level = level;
  }
  get type(): 'attack' | 'defense' {
    return this.type;
  }
  set type(type: 'attack' | 'defense') {
    this.type = type;
  }
  get element(): TFightingMoveElement {
    return this.element;
  }
  set element(element: TFightingMoveElement) {
    this.element = element;
  }
  get expertise(): number {
    return this.expertise;
  }
  set expertise(expertise: number) {
    this.expertise = expertise;
  }
  get damage(): number {
    return this.damage;
  }
  set damage(damage: number) {
    this.damage = damage;
  }
  get staminaCost(): number {
    return this.staminaCost;
  }
  set staminaCost(staminaCost: number) {
    this.staminaCost = staminaCost;
  }
  get timeToCast(): number {
    return this.timeToCast;
  }
  set timeToCast(timeToCast: number) {
    this.timeToCast = timeToCast;
  }
}
