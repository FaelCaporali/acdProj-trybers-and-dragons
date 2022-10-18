import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.raceCounter += 1;
    Race.raceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}