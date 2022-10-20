"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor() {
        super('Elf', (0, utils_1.default)(3, 10));
        this._maxLifePoints = 99;
        Elf.raceCounter += 1;
    }
    static createdRacesInstances() {
        return Elf.raceCounter;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Elf;
