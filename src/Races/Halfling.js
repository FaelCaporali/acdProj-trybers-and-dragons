"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor() {
        super('Halfling', (0, utils_1.default)(3, 7));
        this._maxLifePoints = 60;
        Halfling.raceCounter += 1;
    }
    static createdRacesInstances() {
        return Halfling.raceCounter;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Halfling;
