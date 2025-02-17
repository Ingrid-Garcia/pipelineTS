import express ,{Request,Response} from "express";
import AbstractController from "../controllers/AbstractController";
import db from "../models"

class Server {
    private app: express.Application;
    private port: number;
    private env: string;

    constructor(appInit:{port:number; env:string; middlewares:any[];controllers:AbstractController[];}){
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadmiddlewares(appInit.middlewares);
        this.loadRoutes(appInit.controllers);
        this.connectDB();
    }

    private loadRoutes(controllers:AbstractController[]): void{
        this.app.get('/',(req:Request,res:Response) => {
            res.status(200).send("Hello World");
        })
        
        controllers.forEach((controller:AbstractController) => {
            this.app.use(`/${controller.prefix}`,controller.router);
        })
    }

    private loadmiddlewares(middlewares:any[]):void{
        middlewares.forEach((middleware:any)=> {
            this.app.use(middleware); 
        })
    }

    private async connectDB(){
        await db.sequelize.sync({force:false}); 
    }

    public init(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
}

export default Server;
