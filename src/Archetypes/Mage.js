"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor() {
        super('Mage');
        this._energyType = 'mana';
        Mage.instancesCounter += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Mage.instancesCounter;
    }
}
exports.default = Mage;
