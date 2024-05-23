import  {Request, Response} from "express";
import AbstractController from "./AbstractController";
import db from "../models";
//import DepartamentoModel from "../modelsNOSQL/departamentoNOSQL";

class MascotaController extends AbstractController{
    private static _instance: MascotaController;
    public static get instance(): AbstractController{
        if(!this._instance){ 
            this._instance = new MascotaController("mascota"); 
        }
        return this._instance; 
    }
    
    protected initRoutes(): void {
        this.router.get('/crearMascota',this.postCrearMascota.bind(this)); 
        this.router.get('/consultarMascota', this.getconsultarMascota.bind(this));
    }

    private async getconsultarMascota(req:Request, res:Response){
        try{
            console.log("Prueba exitosa");
            let mascota = await db["Mascota"].findAll(); 
            res.status(200).json(mascota); 
        }catch(error:any){
            console.log(error);
            res.status(500).send("Internal server error" + error);
        }
    }
    
    private async postCrearMascota(req:Request, res:Response){
        try{
            console.log(req.body);
            await db.Mascota.create(req.body); 
            res.status(200).send("<h1>Mascota creada</h1>");
            
        }catch(error:any){
            console.log(error)
            res.status(500).send('Internal server error '+ error)
        }
    }

    
}

export default MascotaController;