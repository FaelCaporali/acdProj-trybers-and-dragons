import Fighter, { SimpleFighter } from './Fighter';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import getRandomInt from './utils';
import sufferDamageHandler from './helpers/damageHandler';

export default class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  readonly name: string;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string, race?: Race, archetype?: Archetype) {
    this.name = name;
    this.race = race || new Elf();
    this.archetype = archetype || new Mage();
    this._dexterity = this.race.dexterity;

    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    const newLP = sufferDamageHandler(
      attackPoints,
      this._lifePoints,
      this._defense,
    );
    this._lifePoints = newLP;
    return newLP;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const possibleLifeIncrement = getRandomInt(1, 10);
    if (
      this.race.maxLifePoints
      >= this._maxLifePoints + possibleLifeIncrement
    ) {
      this._maxLifePoints += possibleLifeIncrement;
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      ...this._energy,
      amount: 10,
    };
  }

  special(defender: SimpleFighter): void {
    if (this._energy.amount >= 2) {
      this._energy.amount -= 2;
      defender.receiveDamage(this._strength * 2);
    } else {
      this._energy.amount += 2;
    }
  }
}
