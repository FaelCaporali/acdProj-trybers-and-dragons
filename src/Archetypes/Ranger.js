"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor() {
        super('Ranger');
        this._energyType = 'stamina';
        Ranger.instancesCounter += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return Ranger.instancesCounter;
    }
}
exports.default = Ranger;
