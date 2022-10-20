"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor() {
        super('Dwarf', (0, utils_1.default)(1, 4));
        this._maxLifePoints = 80;
        Dwarf.raceCounter += 1;
    }
    static createdRacesInstances() {
        return Dwarf.raceCounter;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Dwarf;
