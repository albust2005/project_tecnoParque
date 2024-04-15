// Importamos dependecias al proyecto
import { DataTypes } from "sequelize";
import { db } from "../database/db";

const Usuarios = db.define('usuarios', {
    COD: {
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
    createAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updateAt: {
        type: DataTypes.DATE,
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
})

export default Usuarios;