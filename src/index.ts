import Server from './provider/Server';
import {PORT,NODE_ENV} from './config';
import express from 'express';
import cors from 'cors';
import MascotaController from "./controllers/MascotaController";
import JuegoController from "./controllers/JuegoController";

const server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers:[
        MascotaController.instance,
        JuegoController.instance
    ]
});

declare global {
    namespace Express {
        interface Request {
            user: string;
            token: string;
        }
    }
}

server.init();