import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  _energyType: EnergyType;

  constructor() {
    super('Ranger');
    this._energyType = 'stamina';
    Ranger.instancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instancesCounter;
  }
}