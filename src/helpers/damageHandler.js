"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sufferDamageHandler(attackPoints, lifePoints, defense) {
    let damage = attackPoints - (defense || 0);
    damage = (damage <= 0 ? 1 : damage);
    const finalLP = lifePoints - damage;
    if (damage > 0) {
        if (finalLP - damage <= 0) {
            return -1;
        }
        return finalLP;
    }
    return lifePoints;
}
exports.default = sufferDamageHandler;
