import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  _energyType: EnergyType;

  constructor() {
    super('Mage');
    this._energyType = 'mana';
    Mage.instancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instancesCounter;
  }
}