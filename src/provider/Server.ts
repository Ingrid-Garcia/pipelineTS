<<<<<<< HEAD
import express ,{Request,Response} from "express";
import AbstractController from "../controllers/AbstractController";
import db from "../models"

class Server {
    private app: express.Application;
    private port: number;
    private env: string;

    constructor(appInit:{port:number; env:string; middlewares:any[];controllers:AbstractController[];}){
=======
//const express = require('express'); //JS
import express, {Request, Response} from 'express'; //TS
import AbstractController from '../controllers/AbstractController';
import db from '../models';

class Server{
    //Atributos de instancia
    private app: express.Application;
    private port: number;
    private env:string;
    //Metodos de instancia

    constructor(appInit:{port:number;env:string;middlewares:any[];controllers:AbstractController[]}){
>>>>>>> 4663778176500195074bd5aa382ae5a913e24350
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadmiddlewares(appInit.middlewares);
        this.loadRoutes(appInit.controllers);
<<<<<<< HEAD
        this.connectDB();
    }

    private loadRoutes(controllers:AbstractController[]): void{
        this.app.get('/',(req:Request,res:Response) => {
            res.status(200).send("Hello World");
        })
        
        controllers.forEach((controller:AbstractController) => {
=======
        this.connectDB();        
        
    }

    private loadRoutes(controllers:AbstractController[]):void{
        this.app.get('/',(req:Request,res:Response)=>{
            res.status(200).send('Hello world'); 
        })

        controllers.forEach((controller:AbstractController )=> {
>>>>>>> 4663778176500195074bd5aa382ae5a913e24350
            this.app.use(`/${controller.prefix}`,controller.router);
        })
    }

    private loadmiddlewares(middlewares:any[]):void{
<<<<<<< HEAD
        middlewares.forEach((middleware:any)=> {
            this.app.use(middleware); 
=======
        middlewares.forEach((middleware:any)=>{
            this.app.use(middleware);
>>>>>>> 4663778176500195074bd5aa382ae5a913e24350
        })
    }

    private async connectDB(){
<<<<<<< HEAD
        await db.sequelize.sync({force:false}); 
=======
        await db.sequelize.sync({force:false});
>>>>>>> 4663778176500195074bd5aa382ae5a913e24350
    }

    public init(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
<<<<<<< HEAD
        })
    }
}

export default Server;
=======
        })       
    }

}

export default Server;
>>>>>>> 4663778176500195074bd5aa382ae5a913e24350
