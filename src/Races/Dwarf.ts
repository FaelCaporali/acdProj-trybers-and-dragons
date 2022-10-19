import getRandomInt from '../utils';
import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor() {
    super('Dwarf', getRandomInt(1, 4));
    this._maxLifePoints = 80;
    Dwarf.raceCounter += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.raceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}