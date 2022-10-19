// import Character from "../Character";
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private monsters: SimpleFighter[];
  private _status: boolean;
  private rounds: number;

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this.monsters = monsters;
    this.rounds = 0;
    this._status = true;
  }

  private finalize() {
    console.log('Battle Finished.....');
    this._status = false;
    const monstersLP = this.monsters.map((msn) => msn.lifePoints);
    if (this.player.lifePoints <= 0 && monstersLP.every((life) => life <= 0)) {
      console.log('It was a tie!');
      return 0;
    }
    console.log(
      `${super.fight() === 1 ? 'You Won Champ!' : 'Monsters got you man...'}`,
    );
    return super.fight();
  }

  private battle(): number {
    this.rounds += 1;
    const oldPl1LP = this.player.lifePoints;
    console.log(`Round ${this.rounds}:`);
    console.log('   Player1 Attacks!');
    this.player.attack(this.monsters.find((msn) => msn.lifePoints > 0)
    || this.monsters[0]);
    console.log(`   Monsters lifePoints remaining:
    ${this.monsters.map((msn, i) => `Monster ${i + 1}: ${msn.lifePoints} `)}`);
    console.log('   Monsters Attacks!');
    this.monsters.forEach((msn) => msn.attack(this.player));
    console.log(`       Damage: ${oldPl1LP - this.player.lifePoints},
            life points remaining: ${this.player.lifePoints}
    -------------------------------------------------------------------`);
    if (
      this.player.lifePoints <= 0
      || this.monsters.every((monster) => monster.lifePoints <= 0)
    ) return this.finalize();
    return this.battle();
  }

  fight(): number {
    const monstersAvgStr = this.monsters.reduce((a, mns) => a + mns.strength, 0)
      / this.monsters.length;
    const monstersLP = this.monsters.reduce((a, mns) => a + mns.lifePoints, 0);
    console.log(`A luta inicia!
    Player: 
        força: ${this.player.strength},
        life Points: ${this.player.lifePoints},
        defesa: ${this.player.defense}.
    Monstros:
        quantidade: ${this.monsters.length},
        média das forças: ${monstersAvgStr},
        total de life Points: ${monstersLP},      
    `);
    return this.battle();
  }
}
