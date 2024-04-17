// Imsportamos las dependencias para el proyecto
import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Libros = db.define('libros', {
    COD: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    costo: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    archivo: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(200)
    },
    COD_tema: {
        type: DataTypes.INTEGER(10),
        allowNull: false
    },
    COD_empresa: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }
}, {
    timestamps: false
})

export default Libros;