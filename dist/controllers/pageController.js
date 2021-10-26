"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const activeMenu_1 = require("../helpers/activeMenu");
const pet_1 = require("../models/pet");
//Todos os animais
const home = (req, res) => {
    let pets = pet_1.Pet.getAll;
    res.render('../views/pages/page', {
        pets,
        menu: (0, activeMenu_1.activeObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};
exports.home = home;
//Cachorros
const dogs = (req, res) => {
    let pets = pet_1.Pet.searchType('dog');
    res.render('../views/pages/page', {
        menu: (0, activeMenu_1.activeObject)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        pets
    });
};
exports.dogs = dogs;
//Gatos
const cats = (req, res) => {
    let pets = pet_1.Pet.searchType('cat');
    res.render('../views/pages/page', {
        menu: (0, activeMenu_1.activeObject)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        pets
    });
};
exports.cats = cats;
//Peixes
const fishes = (req, res) => {
    let pets = pet_1.Pet.searchType('fish');
    res.render('../views/pages/page', {
        menu: (0, activeMenu_1.activeObject)('fish'),
        banner: {
            title: 'Paixes',
            background: 'banner_fish.jpg'
        },
        pets
    });
};
exports.fishes = fishes;
