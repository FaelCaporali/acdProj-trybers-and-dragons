"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor() {
        super('Orc', (0, utils_1.default)(2, 6));
        this._maxLifePoints = 74;
        Orc.raceCounter += 1;
    }
    static createdRacesInstances() {
        return Orc.raceCounter;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Orc;
