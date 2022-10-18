export default function sufferDamageHandler(
  attackPoints: number,
  lifePoints: number,
  defense?: number,
) {
  const damage = attackPoints - (defense || 0);
  const finalLP = lifePoints - damage;
  if (damage > 0) {
    if (finalLP - damage <= 0) {
      return -1;
    }
    return finalLP;
  }
  return lifePoints;
}
