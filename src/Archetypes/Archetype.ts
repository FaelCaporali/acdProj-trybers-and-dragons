import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  protected static instancesCounter: number;

  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
    Archetype.instancesCounter = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}