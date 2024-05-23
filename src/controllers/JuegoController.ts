import  {Request, Response} from "express";
import AbstractController from "./AbstractController";
import db from "../models";
//import DepartamentoModel from "../modelsNOSQL/departamentoNOSQL";

class JuegoController extends AbstractController{
    private static _instance: JuegoController;
    public static get instance(): AbstractController{
        if(!this._instance){ 
            this._instance = new JuegoController("juego"); 
        }
        return this._instance; 
    }
    
    protected initRoutes(): void {
        this.router.get('/crearJuego',this.postCrearJuego.bind(this)); 
        this.router.get('/consultarJuego', this.getConsultarJuego.bind(this));
    }

    private async getConsultarJuego(req:Request, res:Response){
        try{
            const juegos = await Videojuego.scan().exec().promise(); 
            console.log(juegos);
            res.status(200).send(juegos[0].Items);
        }catch(err){
            console.log(err);
            res.status(500).send('Internal server error '+ err);
        }
    }
    
    private async postCrearJuego(req:Request, res:Response){
        try{
            console.log(req.body);
            await Videojuego.create(req.body);
            res.status(200).send("<h1>Videojuego creado</h1>");
        }catch(err){
            console.log(err);
            res.status(500).send('Internal server error '+ err);
        }
    }

    
}

export default MascotaController;