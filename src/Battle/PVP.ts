import Fighter from '../Fighter';
import Battle from './Battle';
import Character from '../Character';

export default class PVP extends Battle {
  player1: Fighter;
  player2: Fighter;
  private _status: boolean;
  private rounds: number;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
    this.rounds = 0;
    this._status = this.player1.lifePoints > 0 && this.player2.lifePoints > 0;
  }

  get isBattleOver(): boolean {
    return !this._status;
  }

  private finalize() {
    console.log('Battle Finished.....');
    this._status = false;
    if (this.player1.lifePoints <= 0 && this.player2.lifePoints <= 0) {
      console.log('It was a tie!');
      return 0;
    }
    console.log(`${super.fight() === 1 ? 'Player 2' : 'Player 1'} Won!!!`);
    return super.fight();
  }

  private battle(): number {
    this.rounds += 1;
    const oldPl1LP = this.player1.lifePoints;
    const oldPl2LP = this.player2.lifePoints;
    console.log(`Round ${this.rounds}:`);
    console.log('   Player1 Attacks!');
    this.player1.attack(this.player2);
    console.log(`       Damage: ${oldPl2LP - this.player2.lifePoints},
            life points remaining: ${this.player2.lifePoints}
                        ------------`);
    console.log('   Player2 Attacks!');
    this.player2.attack(this.player1);
    console.log(`       Damage: ${oldPl1LP - this.player1.lifePoints},
            life points remaining: ${this.player1.lifePoints}
    -------------------------------------------------------------------`);
    if (this.player1.lifePoints <= 0 || this.player2.lifePoints <= 0) {
      return this.finalize();
    }
    return this.battle();
  }

  fight(): number {
    console.log(`Confira os players!
    Player 1: 
        força: ${this.player1.strength},
        life Points: ${this.player1.lifePoints},
        defesa: ${this.player1.defense}.
    Player 2:
        força: ${this.player2.strength},
        life Points: ${this.player2.lifePoints},
        defesa: ${this.player2.defense}.        
    `);
    return this.battle();
  }
}

const myPVP = new PVP(new Character('player1'), new Character('player2'));

myPVP.fight();