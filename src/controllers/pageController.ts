import {Request, Response} from 'express';

//Todos os animais
export const home = (req:Request, res:Response)=>{
    res.render('../views/pages/home')
}

//Cachorros
export const dogs = (req:Request, res:Response)=>{

}

//Gatos
export const cats = (req:Request, res:Response)=>{

}

//Peixes
export const fishes = (req:Request, res:Response)=>{

}