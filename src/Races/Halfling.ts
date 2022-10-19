import getRandomInt from '../utils';
import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  constructor() {
    super('Halfling', getRandomInt(3, 7));
    this._maxLifePoints = 60;
    Halfling.raceCounter += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.raceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}