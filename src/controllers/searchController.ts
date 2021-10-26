import {Request, Response} from 'express';
import {Pet} from '../models/pet';
import { activeObject } from '../helpers/activeMenu';

export const search = (req:Request, res:Response)=>{
    let query:string = req.query.q as string

    if(!query){
        res.redirect('/');
        return;
    }

    let pets = Pet.searchName(query)


    res.render('pages/page', {
        menu: activeObject(''),
        pets,
        query
    })
}