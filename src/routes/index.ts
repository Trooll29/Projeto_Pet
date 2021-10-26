import { Router } from "express";
import * as PagesControll from '../controllers/pageController';
import * as SearchControll from '../controllers/searchController';
const rotas = Router();

rotas.get('/', PagesControll.home);
rotas.get('/dogs', PagesControll.dogs);
rotas.get('/cats', PagesControll.cats);
rotas.get('/fishes', PagesControll.fishes);

rotas.get('/search', SearchControll.search);


export default rotas;