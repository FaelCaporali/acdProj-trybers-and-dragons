import Character from './Character';
import { Elf, Orc, Halfling, Dwarf } from './Races';
import { Ranger, Mage, Warrior, Necromancer } from './Archetypes';
import Dragon from './Dragon';
import Monster from './Monster';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Jostanistaker', new Halfling(), new Mage());
const player2 = new Character('Mindgertlyr', new Dwarf(), new Warrior());
const player3 = new Character('Yyiglorsñ', new Orc(), new Necromancer());
const player4 = new Character('Misengraole', new Elf(), new Ranger());

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

player1.levelUp();
player1.levelUp();
player1.levelUp();

function runBattles(battles: Battle[]): number[] {
  return battles.map((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
  player4,
};