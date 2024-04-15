//Importación de las dependencias 
import { DataTypes } from "sequelize";
import { db } from "../database/db";

const Compra = db.define('compra', {
    COD: {
        type: DataTypes.INTEGER(10),
        primaryKey: true
    },
    ID_usuarios: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valor: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    }
},{
    timestamps: false
})

export default Compra;