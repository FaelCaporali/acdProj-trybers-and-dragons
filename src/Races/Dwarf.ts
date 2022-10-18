import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static dwarfCounter: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    if (Dwarf.dwarfCounter === undefined) {
      Dwarf.dwarfCounter = 0;
    }
    Dwarf.dwarfCounter += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}