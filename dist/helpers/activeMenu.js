"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeObject = void 0;
const activeObject = (active) => {
    let Objects = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (active !== '') {
        Objects[active] = true;
    }
    return Objects;
};
exports.activeObject = activeObject;
