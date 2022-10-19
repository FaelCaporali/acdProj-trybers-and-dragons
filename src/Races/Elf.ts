import getRandomInt from '../utils';
import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;

  constructor() {
    super('Elf', getRandomInt(3, 10));
    this._maxLifePoints = 99;
    Elf.raceCounter += 1;
  }

  static createdRacesInstances(): number {
    return Elf.raceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}