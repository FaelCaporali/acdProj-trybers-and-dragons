import Character from './Character';
import { Orc, Halfling, Dwarf } from './Races';
import { Mage, Warrior, Necromancer } from './Archetypes';
import Dragon from './Dragon';
import Monster from './Monster';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character(
  'Jostanistaker',
  new Halfling('Jostmanistaker', 10),
  new Mage('Jostmanistaker'),
);
const player2 = new Character(
  'Mindgertlyr',
  new Dwarf('Mindgertlyr', 3),
  new Warrior('Mindgertlyr'),
);
const player3 = new Character(
  'Yyiglorsñ',
  new Orc('Yyiglorsñ', 7),
  new Necromancer('Yyiglorsñ'),
);

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
};