export default function getAttackOrder(
  player1Dex: number,
  player2Dex: number,
): ['player1' | 'player2', 'player1' | 'player2'] {
  return player1Dex > player2Dex
    ? ['player1', 'player2']
    : ['player2', 'player1'];
}
