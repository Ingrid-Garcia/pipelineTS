import dynamodb from "../services/dynamoService";
import joi from 'joi';
import { PREFIX_NAME } from "../config";

const VideojuegoModel = dynamodb.define('videojuego',{
    hashKey: 'VideojuegoId',
    timestamps: false,
    schema: {
        VideojuegoId: dynamodb.types.uuid(),
        Nombre: joi.string().required(),
        Plataforma: joi.string().required(),
        Premios: joi.number().required(),
    },
    tableName: `Videojuego${PREFIX_NAME}`,
});

export default VideojuegoModel;