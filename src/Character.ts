import Fighter from './Fighter';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string, race?: Race, archetype?: Archetype) {
    this._dexterity = getRandomInt(1, 10);

    this.race = race || new Elf(name, this._dexterity);
    this.archetype = archetype || new Mage(name);

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
    const damage = attackPoints - this._defense;
    const finalLP = this.lifePoints - damage;
    if (damage > 0) {
      if (finalLP - damage <= 0) {
        this._lifePoints = -1;
        return -1;
      }
      this._lifePoints = finalLP;
      return finalLP;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
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

  special() {
    console.log('To be done to ', this.race.name, ' cast');
  }
}
