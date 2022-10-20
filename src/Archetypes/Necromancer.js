"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor() {
        super('Necromancer');
        this._energyType = 'mana';
        Necromancer.instancesCounter += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Necromancer.instancesCounter;
    }
}
exports.default = Necromancer;
