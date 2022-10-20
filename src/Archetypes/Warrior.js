"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor() {
        super('Warrior');
        this._energyType = 'stamina';
        Warrior.instancesCounter += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Warrior.instancesCounter;
    }
}
exports.default = Warrior;
