"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const activeMenu_1 = require("../helpers/activeMenu");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let pets = pet_1.Pet.searchName(query);
    res.render('pages/page', {
        menu: (0, activeMenu_1.activeObject)(''),
        pets,
        query
    });
};
exports.search = search;
