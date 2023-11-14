export interface ICaracter {
  id: string;
  name: string;
  level: number;
  experience: number;
  money: number;
  weight: number;
  initiative: number;
  order: TOrder;
  alignment: TAlignment;
  state: TState;

  life: number; // vigor
  magic: number; // mind
  stamina: number; // endurance

  currentLife: number;
  currentMagic: number;
  currentStamina: number;

  strength: number;
  intelligence: number;
  dexterity: number;

  attack: number;
  defense: number;
  magicAttack: number;
  magicDefense: number;

  head: IArmor | null;
  chest: IArmor | null;
  arms: IArmor | null;
  legs: IArmor | null;
  feet: IArmor | null;
  leftArm: IWeapon | IShield | null;
  rightArm: IWeapon | IShield | null;
  equipments: IEquipment[];

  spells: ISpell[];
  weaponMoves: IWeaponMove[];
  fightingMoves: IFightingMove[];
  items: IItem[];
}

export type TOrder = 'lawful' | 'neutral' | 'chaotic';
export type TAlignment = 'good' | 'neutral' | 'evil';
export type TState =
  | 'normal'
  | 'poisoned'
  | 'paralyzed'
  | 'dead'
  | 'petrified'
  | 'cursed';

export interface IWeapon {
  id: string;
  name: string;
  level: number;
  type: TWeaponType;
  element: TWeaponElement;
  bodyPart: TWeaponBodyPart;
  attack: number;
  magicAttack: number;
  weight: number;
  durability: number;
  price: number;
}

export type TWeaponType =
  | 'sword'
  | 'axe'
  | 'spear'
  | 'dagger'
  | 'bow'
  | 'crossbow'
  | 'staff'
  | 'grimoire';
export type TWeaponElement =
  | 'fire'
  | 'ice'
  | 'lightning'
  | 'dark'
  | 'holy'
  | 'none';
export type TWeaponBodyPart = 'leftArm' | 'rightArm' | 'bothArms';

export interface IShield {
  id: string;
  name: string;
  level: number;
  defense: number;
  magicDefense: number;
  weight: number;
  durability: number;
  price: number;
}

export interface IArmor {
  id: string;
  name: string;
  level: number;
  bodyPart: TArmorBodyPart;
  defense: number;
  magicDefense: number;
  weight: number;
  durability: number;
  price: number;
}

export type TArmorBodyPart = 'head' | 'chest' | 'arms' | 'legs' | 'feet';

export interface IItem {
  id: string;
  name: string;
  type: TItemType;
  effect: TItemEffect;
  attribute: TItemAttribute;
  value: number;
  weight: number;
  price: number;
}

export type TItemType = 'consumable' | 'material' | 'misc';
export type TItemEffect = 'heal' | 'buff' | 'debuff';
export type TItemAttribute =
  | 'life'
  | 'magic'
  | 'stamina'
  | 'strength'
  | 'intelligence'
  | 'dexterity';

export interface IEquipment {
  id: string;
  name: string;
  level: number;
  type: TEquipmentType;
  attribute: TEquipmentAttribute;
  resistance: TEquipmentResistance;
  value: number;
  weight: number;
  price: number;
}

export type TEquipmentType =
  | 'ring'
  | 'bracelet'
  | 'belt'
  | 'necklace'
  | 'earring';
export type TEquipmentAttribute =
  | 'none'
  | 'life'
  | 'magic'
  | 'stamina'
  | 'strength'
  | 'intelligence'
  | 'dexterity';
export type TEquipmentResistance =
  | 'fire'
  | 'ice'
  | 'lightning'
  | 'dark'
  | 'holy'
  | 'physical'
  | 'poisoned'
  | 'paralyzed'
  | 'dead'
  | 'petrified'
  | 'cursed';

export interface ISpell {
  id: string;
  name: string;
  level: number;
  type: TSpellType;
  element: TSpellElement;
  expertise: number;
  magicCost: number;
  timeToCast: number;
  damage: number;
  price: number;
}

export type TSpellType = 'attack' | 'heal' | 'buff' | 'debuff';
export type TSpellElement = 'fire' | 'ice' | 'lightning' | 'dark' | 'holy';

export interface IWeaponMove {
  id: string;
  name: string;
  level: number;
  type: 'attack' | 'defense';
  expertise: number;
  damage: number;
  staminaCost: number;
  timeToCast: number;
}

export interface IFightingMove {
  id: string;
  name: string;
  level: number;
  type: 'attack' | 'defense';
  element: TFightingMoveElement;
  expertise: number;
  damage: number;
  staminaCost: number;
  timeToCast: number;
}

export type TFightingMoveElement =
  | 'physical'
  | 'fire'
  | 'ice'
  | 'lightning'
  | 'dark'
  | 'holy';
// export type TAction = 'attack' | 'defense' | 'spell' | 'item' | 'flee';
