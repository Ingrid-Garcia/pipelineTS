import {Model, Sequelize} from 'sequelize';

interface MascotaAttributes {
    id:number;
    nombre:string;
    especie:string;
    edad:number;
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Mascota extends Model<MascotaAttributes> implements MascotaAttributes {
        public id!: number;
        public nombre!: string;
        public especie!: string;
        public edad!: number;

    }


    Mascota.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        especie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Mascota',
        timestamps: false
    });
    return Mascota;
}