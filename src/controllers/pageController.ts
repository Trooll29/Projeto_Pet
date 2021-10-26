import {Request, Response} from 'express';
import {activeObject} from '../helpers/activeMenu';
import {Pet} from '../models/pet'

//Todos os animais
export const home = (req:Request, res:Response)=>{
    let pets = Pet.getAll
    res.render('../views/pages/page', {
        pets,
        menu:activeObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}

//Cachorros
export const dogs = (req:Request, res:Response)=>{
    let pets = Pet.searchType('dog')
    res.render('../views/pages/page', {
        menu:activeObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        pets
    })
}

//Gatos
export const cats = (req:Request, res:Response)=>{
    let pets = Pet.searchType('cat');
    res.render('../views/pages/page',{
        menu: activeObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        pets
    })
}

//Peixes
export const fishes = (req:Request, res:Response)=>{
    let pets = Pet.searchType('fish')
    res.render('../views/pages/page',{
        menu:activeObject('fish'),
        banner: {
            title: 'Paixes',
            background: 'banner_fish.jpg'
        },
        pets
    })
}