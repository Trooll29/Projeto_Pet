import express, {Request, Response} from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index'

dotenv.config();
const servidor = express();

servidor.set('view engine', 'mustache');
servidor.set('views', path.join(__dirname, 'views'));
servidor.engine('mustache', mustache());

servidor.use(express.static(path.join(__dirname, '../public')))
servidor.use(express.urlencoded({extended:true}));


servidor.use(mainRoutes)
servidor.use((req:Request, res:Response)=>{
    res.send('Pagina não encontrada')
})

servidor.listen(process.env.PORT)