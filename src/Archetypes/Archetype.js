"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archetype {
    constructor(name) {
        this.name = name;
        this.special = 0;
        this.cost = 0;
        Archetype.instancesCounter = 0;
    }
    static createdArchetypeInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Archetype;
