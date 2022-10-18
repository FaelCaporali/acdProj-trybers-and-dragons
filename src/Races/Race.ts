export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  protected static racesCounter: number;

  constructor(name: string, dexterity: number) {
    Race.racesCounter += 1;
    this.name = name;
    this.dexterity = dexterity;
  }

  static createdRacesInstances(): void {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}