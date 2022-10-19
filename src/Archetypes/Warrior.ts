import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  _energyType: EnergyType;

  constructor() {
    super('Warrior');
    this._energyType = 'stamina';
    Warrior.instancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancesCounter;
  }
}