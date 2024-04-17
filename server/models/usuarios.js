// Importamos dependecias al proyecto
import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Usuarios = db.define('usuarios', {
    ID: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
    },
    nombre_c: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    numero_tarjeta: {
        type: DataTypes.INTEGER(20)
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
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
})

export default Usuarios;