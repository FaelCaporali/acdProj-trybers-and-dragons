/* eslint-disable max-lines-per-function */
import getFirstAttacker from '../helpers/getFirstAttacker';
import Fighter from '../Fighter';
import Battle from './Battle';

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
    console.log(`
--------------------------------------------------------------------------------

    Battle Finished.....`);

    this._status = false;

    if (this.player1.lifePoints <= 0 && this.player2.lifePoints <= 0) {
      console.log('It was a tie!');
      return 0;
    }
    console.log(`${super.fight() === 1
      ? ` Player 1, ${this.player1.name}`
      : ` Player 2, ${this.player2.name}`} Won!!!
      
--------------------------------------------------------------------------------
`);
    return super.fight();
  }

  private round(): number {
    this.rounds += 1;
    let typeOfAttack: 'special' | 'attack' = 'attack';
    const [pl1, pl2] = getFirstAttacker(
      this.player1.dexterity,
      this.player2.dexterity,
    );
    const oldPl1LP = this[pl1].lifePoints;
    const oldPl2LP = this[pl2].lifePoints;
    console.log(`Round ${this.rounds}:`);
    if (this.rounds % 3 === 0) {
      typeOfAttack = 'special';
      console.log('Special Round!!!');
    }
    console.log(`   ${this[pl1].name} Attacks!`);
    this[pl1][typeOfAttack](this[pl2]);
    console.log(`       Damage: ${oldPl2LP - this[pl2].lifePoints},
       enemy lifePoints remaining: ${this[pl2].lifePoints}
                  ------------`);
    if (this[pl2].lifePoints <= 0) return this.finalize();
    console.log(`   ${this[pl2].name} Attacks!`);
    this[pl2][typeOfAttack](this[pl1]);
    console.log(`       Damage: ${oldPl1LP - this[pl1].lifePoints},
       enemy lifePoints remaining: ${this[pl1].lifePoints}
      ------------------------------------------`);
    if (
      this.player1.lifePoints <= 0
      || this.player2.lifePoints <= 0
    ) return this.finalize();
    return this.round();
  }

  fight(): number {
    const { 
      name: ply1,
      archetype: { name: arch1 },
      race: { name: race1 } } = this.player1;
    const { 
      name: ply2,
      archetype: { name: arch2 },
      race: { name: race2 } } = this.player2;
    console.log(`Confira os players!
    Player 1:
        nome: ${ply1}, o ${arch1} ${race1},
        destreza: ${this.player1.dexterity},
        força: ${this.player1.strength},
        life Points: ${this.player1.lifePoints},
        defesa: ${this.player1.defense}.
    Player 2:
        nome: ${ply2}, o ${arch2} ${race2},
        destreza: ${this.player2.dexterity},
        força: ${this.player2.strength},
        life Points: ${this.player2.lifePoints},
        defesa: ${this.player2.defense}.        
    `);
    return this.round();
  }
}
