"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
const damageHandler_1 = require("./helpers/damageHandler");
class Character {
    constructor(name, race, archetype) {
        this.name = name;
        this.race = race || new Races_1.Elf();
        this.archetype = archetype || new Archetypes_1.Mage();
        this._dexterity = this.race.dexterity;
        this._maxLifePoints = this.race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this.archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get energy() {
        return { type_: this._energy.type_, amount: this._energy.amount };
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    receiveDamage(attackPoints) {
        const newLP = (0, damageHandler_1.default)(attackPoints, this._lifePoints, this._defense);
        this._lifePoints = newLP;
        return newLP;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        const possibleLifeIncrement = (0, utils_1.default)(1, 10);
        if (this.race.maxLifePoints
            >= this._maxLifePoints + possibleLifeIncrement) {
            this._maxLifePoints += possibleLifeIncrement;
        }
        else {
            this._maxLifePoints = this.race.maxLifePoints;
        }
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._lifePoints = this._maxLifePoints;
        this._energy = Object.assign(Object.assign({}, this._energy), { amount: 10 });
    }
    special(defender) {
        if (this._energy.amount >= 2) {
            this._energy.amount -= 2;
            defender.receiveDamage(this._strength * 2);
        }
        else {
            this._energy.amount += 2;
        }
    }
}
exports.default = Character;
