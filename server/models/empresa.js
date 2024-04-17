// Importamos las dependencias 
import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Empresa = db.define('empresa', {
    COD : {
        type: DataTypes.INTEGER(11),
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.STRING(200)
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
    }
},{
    timestamps: false
})

export default Empresa;