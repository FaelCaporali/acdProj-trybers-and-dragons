import deepCopy from './helpers/deepCopy';
import Fighter from '../Fighter';
import { IRoundResult, AttackResult } from './interfaces/IRoundResult';
import Character from '../Character';
class Round implements IRoundResult {
  private _players: {
    player1: Fighter,
    player2: Fighter,
  };

  readonly result: {
    actions: AttackResult[];
    players: Fighter[];
  };

  constructor(
    readonly index: number,
    readonly initialPlayers: [Fighter, Fighter],
  ) {
    this.index = index;
    this.initialPlayers = deepCopy(initialPlayers) as [Fighter, Fighter];
    this.result = this.fillResults();
  }

  // eslint-disable-next-line max-lines-per-function
  private fillResults() {
    const resultConstructor = {
      actions: [],
      players: [],
    } as typeof this.result;
    let counter = 1;
    const [pl1, pl2] = this.initialPlayers;
    let attacker = deepCopy(pl1) as Fighter;
    let defender = deepCopy(pl2) as Fighter;
    pl1.attack(pl2);
    resultConstructor.actions.push({
      battledCharacters: [pl1, pl2],
      attacker,
      defender,
      index: counter,
      damage: defender.lifePoints - pl2.lifePoints,
    });
    if (pl1.lifePoints <= 0 || pl2.lifePoints <= 0) {
      resultConstructor.players = [pl1, pl2];
      return resultConstructor;
    }
    counter += 1;
    attacker = deepCopy(pl2) as Fighter;
    defender = deepCopy(pl1) as Fighter;
    pl2.attack(pl2);
    resultConstructor.actions.push({
      battledCharacters: [pl1, pl2],
      attacker,
      defender,
      index: counter,
      damage: defender.lifePoints - pl1.lifePoints,
    });
    resultConstructor.players = [pl1, pl2];
    return resultConstructor;
  }
}

const char1 = new Character('joao');
const char2 = new Character('maria');

const round = new Round(0, [char1, char2]);
console.log(round.initialPlayers, round.result);

export { Round };
