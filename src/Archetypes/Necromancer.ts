import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  _energyType: EnergyType;

  constructor() {
    super('Necromancer');
    this._energyType = 'mana';
    Necromancer.instancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancesCounter;
  }
}