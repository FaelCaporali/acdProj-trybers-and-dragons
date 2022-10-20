import Archetype from '../Archetypes';
import Energy from '../Energy';
import Race from '../Races';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  readonly race: Race,
  readonly archetype: Archetype,
  name: string,
  defense: number,
  energy: Energy,
  dexterity: number,
  special(enemy: SimpleFighter): void,
  levelUp(): void,
}