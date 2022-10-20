import { SimpleFighter } from '../../Fighter';

export type AttackResult = {
  index: number,
  attacker: SimpleFighter,
  defender: SimpleFighter,
  damage: number,
  battledCharacters: SimpleFighter[],
};

export interface IRoundResult {
  readonly index: number,
  readonly initialPlayers: SimpleFighter[],
  readonly result: {
    actions: AttackResult[],
    players: SimpleFighter[],
  };
}